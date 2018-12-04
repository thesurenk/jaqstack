package com.jaqstack.service;

import com.jaqstack.models.User;
import com.jaqstack.models.UserCredentials;
import com.jaqstack.service.UserService;
import javax.inject.Inject;
import com.jaqstack.helpers.AuthenticationException;

/**
 * Component for validating user credentials.
 *
 * @author Suren Konathala
 */
public class UsernamePasswordValidator {

    //@Inject
    private UserService userService;

    public User validateCredentials(UserCredentials userCredentials) {

        User user = new UserService().findUser(userCredentials);

        System.out.println("\n****UsernamePasswordValidator.user="+user);



        if (user == null) {
            // User cannot be found with the given username/email
            throw new AuthenticationException("Bad credentials.");
        }

        /*if (!user.isActive()) {
            // User is not active
            throw new Exception("The user is inactive.");
        }

        if (!passwordEncoder.checkPassword(password, user.getPassword())) {
           // Invalid password
            throw new AuthenticationException("Bad credentials.");
        }*/

        return user;
    }
}
