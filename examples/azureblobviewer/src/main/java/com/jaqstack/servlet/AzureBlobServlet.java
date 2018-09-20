package com.jaqstack.servlet;

import com.jaqstack.azure.impl.AzureBlobFetchImpl;
import com.jaqstack.azure.models.AzureBlobStorage;

import javax.servlet.ServletException;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/blobservice/azure")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class AzureBlobServlet {

    //private String accountContainerName = "acsazurecontainer";

    @POST
    @Path("/fetch")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public String fetchBlobsURLs(AzureBlobStorage azureBlobStorage) throws ServletException {
        AzureBlobFetchImpl azureBlobFetch = new AzureBlobFetchImpl();

        return azureBlobFetch.fetchBlobs(azureBlobStorage.getAzureAcountName(), azureBlobStorage.getAzureAcountKey(), azureBlobStorage.getAzureContainer());
    }
}