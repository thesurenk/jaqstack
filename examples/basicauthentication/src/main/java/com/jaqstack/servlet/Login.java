package com.jaqstack.servlet;

import javax.servlet.ServletException;
import javax.annotation.security.PermitAll;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.jaqstack.models.UserCredentials;
import com.jaqstack.models.User;
import com.jaqstack.service.UserService;
import com.jaqstack.service.AuthenticationTokenService;
import com.jaqstack.models.AuthenticationToken;
import javax.enterprise.context.RequestScoped;

import java.util.List;
import java.util.ArrayList;

import javax.inject.Inject;

/**
 * JAX-RS resource class that provides operations for authentication.
 *
 * @author Suren Konathala
 */
@Path("/auth")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
@RequestScoped
public class Login {

    @Inject
    AuthenticationTokenService authenticationTokenService;

    @Inject
    UserService userService;

    @POST
    @Path("/login")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @PermitAll
    public Response authenticate(UserCredentials userCredentials) {
        System.out.println("\n******* Login.auth : Username=" + userCredentials.getUsername() + ", password="+ userCredentials.getPassword());

        //usernamePasswordValidator = new UsernamePasswordValidator();

        // Validate from database
        User user = userService.validateCredentials(userCredentials);
        System.out.println("\n****user..="+user);

        /*
        Random random = new SecureRandom();
        String token = new BigInteger(130, random).toString(32);
        System.out.println("\n**** Last.. token="+token);*/

        //String token = new AuthenticationTokenService().issueToken(userCredentials.getUsername());
        String token = authenticationTokenService.issueToken(userCredentials.getUsername());

        AuthenticationToken authenticationToken = new AuthenticationToken();
        authenticationToken.setToken(token);

        System.out.println(Response.ok(authenticationToken).build());

        return Response.ok(authenticationToken).build();
    }

    @POST
    @Path("/register")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response registerUser(User user) throws ServletException {
        System.out.println("\n******* Login.registerUser : Username=" + user.getUsername() + ", password="+ user.getPassword());

        String message = userService.addUser(user);

        return Response.ok(message).build();
    }

    @GET
    @Path("/users")
    public Response getAllUsers() {
        List<User> users = new ArrayList<>();

        users = userService.allUsers();

        return Response.ok(users).build();
    }

    @POST
    @Path("/user/id")
    public Response getUserById(User user) {
        // TODO
        return Response.ok().build();
    }

}

