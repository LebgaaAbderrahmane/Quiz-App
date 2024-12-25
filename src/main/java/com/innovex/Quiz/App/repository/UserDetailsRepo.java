package com.innovex.Quiz.App.repository;

import com.innovex.Quiz.App.entity.auth.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserDetailsRepo extends JpaRepository<User,Integer> {
    User findByUsername(String username);
    User findByEmail(String email);
}
