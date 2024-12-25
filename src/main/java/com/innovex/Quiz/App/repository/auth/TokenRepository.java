package com.innovex.Quiz.App.repository.auth;

import com.innovex.Quiz.App.entity.auth.Token;
import com.innovex.Quiz.App.entity.auth.UserTokenId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TokenRepository extends JpaRepository<Token, UserTokenId> {
    Token findTokenByUserIdAndNameAndLoginProvider(Long userId,String name,String loginProvider);
    Token findTokenByUserId(Long UserId);
    Token findTokenByValue(String value);
    void deleteTokenByValue(String value);
}
