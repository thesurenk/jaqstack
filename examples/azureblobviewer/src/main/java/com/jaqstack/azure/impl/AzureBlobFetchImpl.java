package com.jaqstack.azure.impl;

import com.jaqstack.azure.models.AzureBlob;
import com.microsoft.azure.storage.blob.CloudBlob;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import com.jaqstack.azure.AzureBlobFetch;
import java.security.InvalidKeyException;

import com.microsoft.azure.storage.CloudStorageAccount;
import com.microsoft.azure.storage.blob.CloudBlobClient;
import com.microsoft.azure.storage.blob.CloudBlobContainer;
import com.microsoft.azure.storage.blob.ListBlobItem;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.util.List;
import java.util.ArrayList;

/**
 *
 */
public class AzureBlobFetchImpl implements AzureBlobFetch {
    private static final Logger logger = LogManager.getLogger(AzureBlobFetchImpl.class);

    @Override
    public void connect() {
        //@TODO
    }

    /**
     *
     */
    @Override
    public String fetchBlobs(String accountName, String accountKey, String containerName) {

        List<AzureBlob> azureBlobList = new ArrayList<>();
        CloudBlob blob;
        Gson objGson = new GsonBuilder().setPrettyPrinting().create();
        //String blobThumbnail;

        try {
            String storageConnectionString = "DefaultEndpointsProtocol=http;"
                    + "AccountName="+accountName+";"
                    + "AccountKey="+accountKey;

            CloudStorageAccount storageAccount = CloudStorageAccount.parse(storageConnectionString);
            if (storageAccount==null) {
                throw new Exception("Connection to Azure Storage Account Failed!");
            }

            CloudBlobClient blobClient = storageAccount.createCloudBlobClient();
            if (blobClient==null) {
                throw new Exception("Connection to Azure Storage Blob Client Failed!");
            }

            CloudBlobContainer blobContainer = blobClient.getContainerReference(containerName);
            if (blobContainer==null) {
                throw new Exception("Connection to Azure Storage Blob Container Failed!");
            }

            logger.info("\n\n******* Connected to Azure Blob Storage - blobContainer="+blobContainer);

            // Loop over blobs within the container and output the URI to each of them.
            for (ListBlobItem blobItem : blobContainer.listBlobs()) {

                if (blobItem instanceof CloudBlob) {
                    logger.info("\n\n******* blobItem.getUri()="+blobItem.getUri());

                    blob = (CloudBlob) blobItem;

                    //blobThumbnail = getBlobthumbnail(blobItem.getUri().toString());

                    azureBlobList.add(new AzureBlob(blob.getName(),blobItem.getUri().toString(), "image/png"));
                }
            }

        } catch(InvalidKeyException ex) {
            logger.info("\n******* Invalid credentials", ex);
        } catch (Exception ex) {
            logger.info("\n******* buildProcess Exception", ex.getMessage());
        }

        return objGson.toJson(azureBlobList);
    }

}
