# Use a base image with Java and MySQL installed
FROM eclipse-temurin:17-jdk-alpine

ENV ENVIRONMENT=dev

# Set the working directory
WORKDIR /app

# Copy the built JAR file
COPY target/api.jar /app/api.jar

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

CMD ["java", "-jar", "-Dspring.profiles.active=${ENVIRONMENT}", "/app/api.jar"]
