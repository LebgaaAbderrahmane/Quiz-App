package com.innovex.Quiz.App.service.auth;

import com.innovex.Quiz.App.entity.auth.Token;
import com.innovex.Quiz.App.entity.auth.User;
import com.innovex.Quiz.App.repository.UserDetailsRepo;
import com.innovex.Quiz.App.repository.auth.TokenRepository;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.util.function.Function;

@Service
public class JwtService {

    private final TokenRepository tokenRepository;

    @Value("${jwt.secret}")
    private String secretKeyString;

    private SecretKey secretKey;

    @PostConstruct
    // the init() method is called after the Spring context initializes the secretKeyString field with the value from the configuration.
    public void init() {
        secretKey = Keys.hmacShaKeyFor(secretKeyString.getBytes(StandardCharsets.UTF_8));
    }

    private final String name = "Access Token";
    private final String loginProvider = "JWT";
    private final UserDetailsRepo userDetailsRepo;

    public JwtService(TokenRepository tokenRepository, UserDetailsRepo userDetailsRepo) {
        this.tokenRepository = tokenRepository;
        this.userDetailsRepo = userDetailsRepo;
    }

    public String generateToken(User user) {
        String jwtToken = Jwts.builder()
                .claims()
                .subject(user.getUsername())
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 24))
                .and()
                .signWith(getKey())
                .compact();

        Token authToken = new Token();
        authToken.setName(name);
        authToken.setLoginProvider(loginProvider);
        authToken.setUserId(user.getId());
        authToken.setValue(jwtToken);

        tokenRepository.save(authToken);

        return jwtToken;
    }

    private SecretKey getKey() {
        return secretKey;
    }

    public String extractUserName(String token) {
        // extract the username from jwt token
        return extractClaim(token, Claims::getSubject);
    }

    private <T> T extractClaim(String token, Function<Claims, T> claimResolver) {
        final Claims claims = extractAllClaims(token);
        return claimResolver.apply(claims);
    }


    private Claims extractAllClaims(String token) {
        return Jwts.parser()
                .verifyWith(getKey())
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }


    public boolean validateToken(String token, UserDetails userDetails) {
        final String userName = extractUserName(token);
        User user = userDetailsRepo.findByUsername(userDetails.getUsername());
        //check if token exist in database
        Token authToken = tokenRepository.findTokenByUserId(user.getId());
        return (userName.equals(userDetails.getUsername()) && !isTokenExpired(token) && authToken != null);
    }

    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    private Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }


//    private List<String> extractRoles(String token) {
//        Claims claims = extractAllClaims(token);
//        return claims.get("roles", List.class); // Ensure your token includes roles under "roles"
//    }
//private List<String> extractRoles(String token) {
//    Claims claims = extractAllClaims(token);
//    List<String> roles = claims.get("roles", List.class);
//    if (roles == null) {
//        System.out.println("No roles found in the token!");
//    }
//    return roles; // This might return null if the roles claim is missing
//}

}

