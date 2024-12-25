package com.innovex.Quiz.App.controller.auth;

import com.innovex.Quiz.App.dto.auth.AuthenticationRequestDto;
import com.innovex.Quiz.App.dto.auth.RegisterRequestDto;
import com.innovex.Quiz.App.service.auth.AuthService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/auth")
public class AuthController {
    private final AuthService authService;


    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    //test
    @GetMapping("/hello")
    public String hello() {
        return "Hello, you are authenticated!";
    }


    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterRequestDto user) {
        return authService.register(user);
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody AuthenticationRequestDto authenticationRequest) {
        return authService.verify(authenticationRequest);
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logout(HttpServletRequest request) {
        String authHeader = request.getHeader("Authorization");

        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            String token = authHeader.substring(7);
            return authService.logout(token);
        }
        return new ResponseEntity<>("invalid or missing authorization header ", HttpStatus.BAD_REQUEST);
    }


}
