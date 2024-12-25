package com.innovex.Quiz.App.service.auth;

import com.innovex.Quiz.App.entity.auth.User;
import com.innovex.Quiz.App.repository.UserDetailsRepo;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CostumUserDetailsService implements UserDetailsService {

    private final UserDetailsRepo userDetailsRepo;

    public CostumUserDetailsService(UserDetailsRepo userDetailsRepo) {
        this.userDetailsRepo = userDetailsRepo;
    }

    @Override
    public UserDetails loadUserByUsername(String usernameOrEmail) throws UsernameNotFoundException {
        User user = userDetailsRepo.findByUsername(usernameOrEmail);
        if (user == null){
            user = userDetailsRepo.findByEmail(usernameOrEmail);
        }
        if (user == null){
            throw new UsernameNotFoundException("User with username ="+usernameOrEmail+" not found");
        }
        return user;
    }
}
