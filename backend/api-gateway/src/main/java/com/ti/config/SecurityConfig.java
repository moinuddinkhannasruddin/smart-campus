package com.ti.config;

//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
//import org.springframework.security.config.web.server.ServerHttpSecurity;
//import org.springframework.security.web.server.SecurityWebFilterChain;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @author Azam
 */
//@Configuration
//@EnableWebFluxSecurity
public class SecurityConfig {

//    @Autowired
//    private AuthenticationFilter authenticationFilter;

//    @Bean
//    public RouteLocator routes(RouteLocatorBuilder builder) {
//        return builder.routes()
//                .route("auth", r -> r.path("**/auth/**").filters(f -> f.filter(authenticationFilter)).uri("lb://auth-service"))
////                .route("alert", r -> r.path("/alert/**").filters(f -> f.filter(authenticationFilter)).uri("lb://alert"))
////                .route("echo", r -> r.path("/echo/**").filters(f -> f.filter(authenticationFilter)).uri("lb://echo"))
////                .route("hello", r -> r.path("/hello/**").filters(f -> f.filter(authenticationFilter)).uri("lb://hello"))
//                .build();
//    }

//    @Bean
//    public SecurityWebFilterChain springSecurityWebFilterChain(ServerHttpSecurity serverHttpSecurity){
//
//        serverHttpSecurity.csrf(ServerHttpSecurity.CsrfSpec::disable)
//                .authorizeExchange(exchange -> exchange
//                        .pathMatchers("/eureka/**")
//                        .permitAll()
//                        .anyExchange()
//                        .authenticated())
//                .oauth2ResourceServer(ServerHttpSecurity.OAuth2ResourceServerSpec::jwt);
//
//        return serverHttpSecurity.build();
//    }
}
