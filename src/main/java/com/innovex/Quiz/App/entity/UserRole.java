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
public class UserRole {
    @EmbeddedId
    private UserRoleKey id = new UserRoleKey();

    @ManyToOne
    @MapsId("userId")
    private Users user;

    @ManyToOne
    @MapsId("roleId")
    private Role role;

    // Composite Key
    @Embeddable
    @Getter
    @Setter
    @EqualsAndHashCode
    public static class UserRoleKey implements Serializable {
        private Long userId;
        private Long roleId;

    }
}
