package com.jaqstack.service;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import java.security.Key;

/**
 * Service which provides operations for authentication tokens.
 *
 * @author Suren Konathala
 */
public class AuthenticationTokenService {

    public String issueToken(String username) {

        Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256);
        String jws = Jwts.builder().setSubject(username).signWith(key).compact();

        return jws;
    }

}
