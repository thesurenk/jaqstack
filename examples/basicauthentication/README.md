# Basic Authentication Example With Angular and Java
This module includes all the primary sources required to build and development of a web applications using JAQ Stack with the Basic Authentication feature.

# Build and Deployment
System requirements
* [Java 1.8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
* [Angular CLI - Optional](https://cli.angular.io/)
* [NodeJS](https://nodejs.org/en/download/)
* [MongoDB](https://www.mongodb.com/)
* [Apache Maven 3.x](https://maven.apache.org/download.cgi)


# How to Build

* Create a new directory and cd to it
  * `$ mkdir projects`
  * `cd projects`
* Clone git repository  
  * `git clone https://github.com/ksurendra/jaqstack.git` [Note: 'ksurendra' will change for you. Copy from github]
* Jaq-stack directory will be created with sources in it
  * `cd jaq-stack`
* Build the project
  * `mvn clean package`
* If the build goes well, you will see the output as below
* The above will generate a `war` file named `` under `/jaq-stack/target/jaq-stack-webapp.war`
* Deploy this `war` to any web application server like Tomcat, Jetty, etc

# How to Deploy/Run

Using Tomcat as an example:
* Open tomcat's admin console like `http://sampleserver.com:8080/manager/html` 
* Choose `Select WAR file to upload` , uplaod the `basicauth.war`
* If the deployment is successful, you can see `/jaq-stack-webapp` in the deployed applications.
* Open a new browser and use this url `http://samplesever.com:8080/basicauth/` . You should see `Java Hello World!`

# Test
* Main application `http://sampleserver:8080/basicauth`
  ![jaq-stack-sample-screen-browser](https://user-images.githubusercontent.com/902972/39284861-0d430d80-48db-11e8-8b96-16719b595e96.png)***Image:*** *Sample jaq-stack-webapp page on browser*


# REST Endpoints
* Show all users - `/basicauth/service/auth/users`
  * Sample URL `http://localhost:8080/basicauth/service/auth/users`
  * Request type: GET
  * Sample output
  ```json
  [{"username":"xyz","password":"test123","firstName":null,"lastName":null},{"username":"123456","password":"123456","firstName":null,"lastName":null}]
   ``` 
* Add a new user - `/basicauth/service/auth/register`
  * Sample URL `http://localhost:8080/basicauth/service/auth/register`
  * Request type: POST
  * JSON input `{"username":"meenu", "password":"test", "firstname":"Meenakshi", "lastname":"Konathala"}`
  * Sample output `User meenu added successfully.` 
* Find Username and Password - `/basicauth/service/auth/login`
  * Sample URL `http://localhost:8080/basicauth/service/auth/login`
  * Request type: POST
  * JSON input `{"username":"meenu", "password":"test"}`
  * Sample output `{"token":"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdXJlbiJ9.emR1bSwGNds4QV7P9FdrLkhv80rmwj3WPF06ntB83H4"}` 


# MongoDB Setup
### Install & Setup
* Download community edition and configure in your system (Windows or Mac or Linux)
### Commands
* `use jaqstack` to Create and move to "jaqstack" database.
* `db.createCollection("users")` to create the collection "users"
* `db.users.insert( { username: "suren", password: "test", firstname: "Surendra", lastname: "Konathala" } )` sample insert of a record into "users"

# Troubleshooting
* If `mvn package` command fails showing that **ng** fails,then run try this
  * `sudo npm install -g @angular/cli`
  * If installation of the above goes into infinite loop, then
    * `mkdir ~/.npm-global`
    * `npm config set prefix ~/.npm-global`
    * `export PATH=~/.npm-global/bin:$PATH`
    * Back on the command line, update your system variables: `source ~/.profile`






