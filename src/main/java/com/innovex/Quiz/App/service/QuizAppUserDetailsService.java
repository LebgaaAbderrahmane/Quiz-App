package com.innovex.Quiz.App.service;

import com.innovex.Quiz.App.dto.UserPrincipal;
import com.innovex.Quiz.App.entity.Users;
import com.innovex.Quiz.App.repository.UserRepo;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class QuizAppUserDetailsService implements UserDetailsService {
    private final UserRepo userRepo;

    public QuizAppUserDetailsService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Users user = userRepo.findByUserName(username);
        if(user == null){
            throw new UsernameNotFoundException("user not found!");
        }
        return new UserPrincipal(user);
    }
}
