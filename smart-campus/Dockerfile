# Use a base image with Java and MySQL installed
FROM maven:3.8.5-openjdk-17 as build

# Copy the built JAR file
#RUN mvn clean package -DskipTests

FROM openjdk:17.0.1-jdk-slim
COPY /target/api.jar api.jar

# Set the environment variables for the MySQL database connection
#ENV MYSQL_HOST=localhost
#ENV MYSQL_PORT=3306
#ENV MYSQL_DATABASE=smart-campus
#ENV MYSQL_USER=root
#ENV MYSQL_PASSWORD=admin
#
## Install MySQL client
#RUN apk update && apk add mysql-client

# Expose the port on which the application will run
EXPOSE 8080

# Run the application
CMD ["java", "-jar", "/api.jar"]
