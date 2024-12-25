package com.innovex.Quiz.App.service.auth;

import com.innovex.Quiz.App.dto.auth.AuthenticationRequestDto;
import com.innovex.Quiz.App.dto.auth.RegisterRequestDto;
import com.innovex.Quiz.App.entity.auth.Role;
import com.innovex.Quiz.App.entity.auth.Token;
import com.innovex.Quiz.App.entity.auth.User;
import com.innovex.Quiz.App.repository.UserDetailsRepo;
import com.innovex.Quiz.App.repository.auth.RoleRepo;
import com.innovex.Quiz.App.repository.auth.TokenRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AuthService {

    private final TokenRepository tokenRepository;

    private final UserDetailsRepo userDetailsRepo;

    private final RoleRepo roleRepo;

    private final JwtService jwtService;

    private final AuthenticationManager authenticationManager;

    private BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder(12);

    public boolean isUsernameValid(String username) {
        return userDetailsRepo.findByUsername(username) == null;
    }

    public AuthService(TokenRepository tokenRepository, UserDetailsRepo userDetailsRepo, RoleRepo roleRepo, JwtService jwtService, AuthenticationManager authenticationManager) {
        this.tokenRepository = tokenRepository;
        this.userDetailsRepo = userDetailsRepo;
        this.roleRepo = roleRepo;
        this.jwtService = jwtService;
        this.authenticationManager = authenticationManager;
    }


    public ResponseEntity<String> register(RegisterRequestDto registerRequest) {

        if (!isUsernameValid(registerRequest.getUsername())) {
            return new ResponseEntity<>("Username is already taken", HttpStatus.BAD_REQUEST);
        }
        User newUser = new User();
        newUser.setPassword(bCryptPasswordEncoder.encode(registerRequest.getPassword()));
        newUser.setUsername(registerRequest.getUsername());
        newUser.setEmail(registerRequest.getEmail());
        newUser.setName(registerRequest.getName());

        Role role = roleRepo.findByName(registerRequest.getRole().getName());
        if (role == null) {
            return new ResponseEntity<>("Role not found", HttpStatus.NOT_FOUND);
        }
        newUser.setRole(role);
        userDetailsRepo.save(newUser);
        return new ResponseEntity<>("Created", HttpStatus.CREATED);
    }

    public ResponseEntity<String> verify(AuthenticationRequestDto authenticationRequest) {
        if (authenticationRequest.getEmailOrUsername() == null || authenticationRequest.getPassword() == null || authenticationRequest.getPassword().isEmpty() || authenticationRequest.getEmailOrUsername().isEmpty()) {
            return new ResponseEntity<>("Username or password can not be empty", HttpStatus.BAD_REQUEST);
        }
        User fetchedUser = userDetailsRepo.findByUsername(authenticationRequest.getEmailOrUsername());
        if (fetchedUser == null) {
            fetchedUser = userDetailsRepo.findByEmail(authenticationRequest.getEmailOrUsername());
        }
        if (fetchedUser == null) {
            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
        }

        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            fetchedUser.getUsername(),
                            authenticationRequest.getPassword())
            );
            if (authentication.isAuthenticated()) {
                return new ResponseEntity<>(
                        jwtService.generateToken(fetchedUser),
                        HttpStatus.OK
                );
            }
            return new ResponseEntity<>("Invalid credentials", HttpStatus.UNAUTHORIZED);
        } catch (AuthenticationException e) {
            return new ResponseEntity<>("Authentication failed: " + e.getMessage(),
                    HttpStatus.UNAUTHORIZED);
        }
    }


    @Transactional
    public ResponseEntity<String> logout(String token) {
        try {
            Token fetchedToken = tokenRepository.findTokenByValue(token);
            if (fetchedToken != null) {
                tokenRepository.deleteTokenByValue(fetchedToken.getValue());
                return ResponseEntity.ok("Logout successful");
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("token not found");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while logging out: " + e.getMessage());
        }

    }
}
