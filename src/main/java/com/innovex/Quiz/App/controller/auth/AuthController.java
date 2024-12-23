package com.innovex.Quiz.App.controller.auth;

import com.innovex.Quiz.App.entity.Users;
import com.innovex.Quiz.App.service.AuthenticationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AuthController {

    private final AuthenticationService authenticationService;

    public AuthController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    @GetMapping("/users") //to be tested
    public ResponseEntity<List<Users>> getUsers (){
        return authenticationService.getUsers();
    }
}
