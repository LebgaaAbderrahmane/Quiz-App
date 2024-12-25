package com.innovex.Quiz.App.entity.auth;

import jakarta.persistence.*;

@Entity
@Table(name = "usertokens")
@IdClass(UserTokenId.class)
public class Token {

    @Id
    @Column(name = "user_id", unique = true)
    private Long userId;

    @Id
    @Column(name = "login_provider")
    private String loginProvider;

    @Id
    private String name;

    @Column(unique = true)
    private String value;

    public Token() {
    }

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

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}
