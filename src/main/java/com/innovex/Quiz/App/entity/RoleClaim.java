package com.innovex.Quiz.App.entity;

import jakarta.persistence.*;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@EqualsAndHashCode
public class RoleClaim {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String claimType;
    private String claimValue;

    @ManyToOne
    @JoinColumn(name = "role_id", nullable = false)
    private Role role;
}
