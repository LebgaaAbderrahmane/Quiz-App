package com.innovex.Quiz.App.entity;

import jakarta.persistence.*;
import lombok.*;


import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class Users
{
    public long getId() {
        return id;
    }

    public String getUserName() {
        return userName;
    }

    public String getNormalizedUserName() {
        return normalizedUserName;
    }

    public String getEmail() {
        return email;
    }

    public String getNormalizedEmail() {
        return normalizedEmail;
    }

    public boolean isEmailConfirmed() {
        return emailConfirmed;
    }

    public String getPasswordHash() {
        return passwordHash;
    }

    public String getSecurityStamp() {
        return securityStamp;
    }

    public String getConcurrencyStamp() {
        return concurrencyStamp;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public boolean isPhoneNumberConfirmed() {
        return phoneNumberConfirmed;
    }

    public boolean isTwoFactorEnabled() {
        return twoFactorEnabled;
    }

    public Date getLockoutEnd() {
        return lockoutEnd;
    }

    public boolean isLockoutEnabled() {
        return lockoutEnabled;
    }

    public int getAccessFailedCount() {
        return accessFailedCount;
    }

    public Set<UserRole> getRoles() {
        return roles;
    }

    public Set<UserClaim> getClaims() {
        return claims;
    }

    public Set<UserLogin> getLogins() {
        return logins;
    }

    public Set<UserToken> getTokens() {
        return tokens;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long id;
    private String userName;
    private String normalizedUserName;
    private String email;
    private String normalizedEmail;
    private boolean emailConfirmed;
    private String passwordHash;
    private String securityStamp;
    private String concurrencyStamp;
    private String phoneNumber;
    private boolean phoneNumberConfirmed;
    private boolean twoFactorEnabled;
    private Date lockoutEnd;
    private boolean lockoutEnabled;
    private int accessFailedCount;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<UserRole> roles = new HashSet<>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<UserClaim> claims = new HashSet<>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<UserLogin> logins = new HashSet<>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<UserToken> tokens = new HashSet<>();


}