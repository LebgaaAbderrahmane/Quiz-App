package com.innovex.Quiz.App.config;

import com.innovex.Quiz.App.service.auth.CostumUserDetailsService;
import com.innovex.Quiz.App.service.auth.JwtService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.context.ApplicationContext;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class JwtFilter extends OncePerRequestFilter {

    private final ApplicationContext context;

    private final JwtService jwtService;

    public JwtFilter(ApplicationContext context, JwtService jwtService) {
        this.context = context;
        this.jwtService = jwtService;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String path = request.getRequestURI();

        // Bypass filter for register and login endpoint
        if (path.equals("/api/v1/auth/register") || path.equals("/api/v1/auth/login")) {
            filterChain.doFilter(request, response);
            return;
        }
        String authHeader = request.getHeader("Authorization");//getting the header of authorization
        System.out.println("the auth header is :" + authHeader);
        String token = null;
        String username = null;

        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            token = authHeader.substring(7); //extract the token
            System.out.println("the token is :" + token);
            username = jwtService.extractUserName(token); //extract the username
            System.out.println("the username is : " + username);
        }

        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {//check if username is extracted properly and if the user is not authenticated
            UserDetails userDetails = context.getBean(CostumUserDetailsService.class).loadUserByUsername(username);

            System.out.println("Loaded UserDetails: " + userDetails);
            System.out.println("Token validation result: " + jwtService.validateToken(token, userDetails));

            System.out.println(userDetails.getAuthorities());
            if (jwtService.validateToken(token, userDetails)) {
                //if the token is valid we create object of the next filter
                System.out.println("the token is valid ");
                UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));//building the auth token
                SecurityContextHolder.getContext().setAuthentication(authToken); //set the auth token in the context (adding the token in the chain)
                System.out.println("Authentication set in SecurityContext: " + SecurityContextHolder.getContext().getAuthentication());
            }

        }
        //to do the filter and go to next filter
        System.out.println("next filter now ");
        filterChain.doFilter(request, response);

    }

}
