package com.innovex.Quiz.App.repository;

import com.innovex.Quiz.App.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<Users,Long> {
    Users findByUserName(String username);

}
