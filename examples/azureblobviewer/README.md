# Azure Blob Viewer Built with JAQStack
This module includes all the primary sources required to build and development of web appications to read and dispaly blobs from an Azure Blob Storage. 

# Build and Deployment
System requirements
* [Java 1.8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
* [Angular CLI - Optional](https://cli.angular.io/)
* [NodeJS](https://nodejs.org/en/download/)
* [Apache Maven 3.x](https://maven.apache.org/download.cgi)


# How to Build
* `mvn clean package`

# How to Deploy/Run

Using Tomcat as an example:
* Open tomcat's admin console like `http://sampleserver.com:8080/manager/html` 
* Choose `Select WAR file to upload` , uplaod the `jaqstack-azure-blobviewer.war`
* If the deployment is successful, you can see `/jaqstack-azure-blobviewer` in the deployed applications.
* Open a new browser and use this url `http://samplesever.com:8080/jaqstack-azure-blobviewer/` . You should see `Java Hello World!`
 
# Test

## Browser
* `http://samplesever.com:8080/jaqstack-azure-blobviewer/initializr/` should isplay the results form the webservice.

## POSTMAN
To test the webservice, use the below:

Type: POST
URL: http://localhost:8080/jaqstack-azure-blobviewer/service/blobservice/azure/fetch

Sample JSON Input

`{
	"azureAcountName" : "acsazure storage account name",
	"azureAcountKey" : "azure acount key value",
	"azureContainer" : "azure container name"
}`

Sample output

`
[
    {
        "blobName": "Git-Logo-1788C.png",
        "blobURL": "http://acsazurestore.blob.core.windows.net/acsazurecontainer/Git-Logo-1788C.png",
        "blboMimeType": "image/png"
    },
    {
        "blobName": "angular.png",
        "blobURL": "http://acsazurestore.blob.core.windows.net/acsazurecontainer/angular.png",
        "blboMimeType": "image/png"
    },
    {
        "blobName": "java-logo-suren.png",
        "blobURL": "http://acsazurestore.blob.core.windows.net/acsazurecontainer/java-logo-suren.png",
        "blboMimeType": "image/png"
    },
    {
        "blobName": "node-js-logo-allvectorlogo.com.png",
        "blobURL": "http://acsazurestore.blob.core.windows.net/acsazurecontainer/node-js-logo-allvectorlogo.com.png",
        "blboMimeType": "image/png"
    }
]
`


