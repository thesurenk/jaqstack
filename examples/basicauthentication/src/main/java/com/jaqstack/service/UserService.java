package com.jaqstack.service;

import com.jaqstack.models.User;
import java.util.List;
import java.util.ArrayList;

import com.jaqstack.models.UserCredentials;
import com.jaqstack.service.DataService;

/**
 * Service that provides operations for {@link User}s.
 *
 * @author Suren Konathala
 */
public class UserService {

    private DataService dataService = new DataService();

    public User findUser(UserCredentials userCredentials) {
        return dataService.findUsernamePassword(userCredentials);
    }

    public String addUser(User user) {
        return dataService.addUser(user);
    }

}
