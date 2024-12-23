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
public class UserToken {
    @EmbeddedId
    private UserTokenKey id = new UserTokenKey();

    private String value;

    @ManyToOne
    @MapsId("userId")
    private Users user;

    @Embeddable
    @Getter
    @Setter
    @EqualsAndHashCode
    public static class UserTokenKey implements Serializable {
        private Long userId;
        private String loginProvider;
        private String name;
    }
}
