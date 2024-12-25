package com.innovex.Quiz.App.entity.auth;

import jakarta.persistence.Embeddable;

import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class UserTokenId implements Serializable {
    private Long userId;
    private String loginProvider;
    private String name;

    // Default constructor
    public UserTokenId() {
    }

    public UserTokenId(Long userId, String loginProvider, String name) {
        this.userId = userId;
        this.loginProvider = loginProvider;
        this.name = name;
    }

    // Getters and setters
    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getLoginProvider() {
        return loginProvider;
    }

    public void setLoginProvider(String loginProvider) {
        this.loginProvider = loginProvider;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    // Equals and hashCode methods are required for composite keys
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserTokenId that = (UserTokenId) o;
        return Objects.equals(userId, that.userId) &&
                Objects.equals(loginProvider, that.loginProvider) &&
                Objects.equals(name, that.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userId, loginProvider, name);
    }
}
