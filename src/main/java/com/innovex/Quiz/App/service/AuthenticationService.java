package com.innovex.Quiz.App.service;

import com.innovex.Quiz.App.entity.Users;
import com.innovex.Quiz.App.repository.UserRepo;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuthenticationService {

    private final UserRepo userRepo;

    public AuthenticationService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    public ResponseEntity<List<Users>> getUsers() {
        List<Users> users = userRepo.findAll();
        System.out.println(users);
        return new ResponseEntity<>(users, HttpStatus.OK);
    }
}
