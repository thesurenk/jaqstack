package com.jaqstack.azure;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public interface AzureBlobFetch {
    Logger logger = LogManager.getLogger(AzureBlobFetch.class);

    public abstract void connect();

    public String fetchBlobs(String accountName, String accountKey, String containerName);
}
