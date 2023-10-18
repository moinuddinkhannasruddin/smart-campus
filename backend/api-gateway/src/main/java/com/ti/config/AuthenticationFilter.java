package com.ti.config;

import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Component;

import java.util.Objects;

/**
 * @author Azam
 */
@Component
@Log4j2
public class AuthenticationFilter extends AbstractGatewayFilterFactory<AuthenticationFilter.Config> {

    @Value("${auth.service.url.validate.token}")
    private String validateTokenUrl;

    @Autowired
    private RestTemplateConfig restTemplateConfig;

    @Autowired
    private RouteValidator routeValidator;

    public AuthenticationFilter(){
        super(Config.class);
    }

    @Override
    public GatewayFilter apply(Config config) {
        log.info("filter...");
        return (((exchange, chain) -> {
            try {
                log.info("Inside return...");
                if (routeValidator.isSecured.test(exchange.getRequest())) {
                    log.info("Inside return");
                    if (!exchange.getRequest().getHeaders().containsKey(HttpHeaders.AUTHORIZATION)) {
                        throw new RuntimeException("Missing Authorization Header");
                    }
                    log.info("Inside return");
                    String header = Objects.requireNonNull(exchange.getRequest().getHeaders().get(HttpHeaders.AUTHORIZATION)).get(0);
                    log.info("Inside return");
                    if (header.startsWith("Bearer ")) {
                        header = header.substring(7);
                    }

                    log.info("Requested Validate Token.");
                    restTemplateConfig.restTemplate().getForObject(validateTokenUrl + header, String.class);
                    log.info("Validate Token Successfully.");
                }
            } catch (Exception ex) {
                log.info(ex.getMessage());
                throw new RuntimeException(ex);
            }
            return chain.filter(exchange);
        }));
    }

    public static class Config {

    }
}
