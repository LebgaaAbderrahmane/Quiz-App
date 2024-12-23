package com.innovex.Quiz.App.entity;

import jakarta.persistence.*;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Entity
@Getter
@Setter
@EqualsAndHashCode
public class UserLogin {
    @EmbeddedId
    private UserLoginKey id = new UserLoginKey();

    private String providerDisplayName;

    @ManyToOne
    @MapsId("userId")
    private Users user;

    @Embeddable
    @Getter
    @Setter
    @EqualsAndHashCode
    public static class UserLoginKey implements Serializable {
        private String loginProvider;
        private String providerKey;
        private Long userId;

    }
}
