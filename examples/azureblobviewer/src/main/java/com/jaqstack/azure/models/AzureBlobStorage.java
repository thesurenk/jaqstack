package com.jaqstack.azure.models;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AzureBlobStorage {

    @JsonProperty
    private String azureAcountName;

    @JsonProperty
    private String azureAcountKey;

    @JsonProperty
    private String azureContainer;

    public String getAzureAcountName() {
        return azureAcountName;
    }

    public void setAzureAcountName(String azureAcountName) {
        this.azureAcountName = azureAcountName;
    }

    public String getAzureAcountKey() {
        return azureAcountKey;
    }

    public void setAzureAcountKey(String azureAcountKey) {
        this.azureAcountKey = azureAcountKey;
    }

    public String getAzureContainer() {
        return azureContainer;
    }

    public void setAzureContainer(String azureContainer) {
        this.azureContainer = azureContainer;
    }
}
