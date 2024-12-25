package com.innovex.Quiz.App.repository.auth;

import com.innovex.Quiz.App.entity.auth.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepo extends JpaRepository<Role, Integer> {
    Role findByName(String name);
}
