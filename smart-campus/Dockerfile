# Use a base image with Java and MySQL installed
FROM openjdk:17-jre-slim

# Set the working directory
WORKDIR /app

# Copy the built JAR file
COPY target/api.jar .

# Set the environment variables for the MySQL database connection
ENV MYSQL_HOST=localhost
ENV MYSQL_PORT=3306
ENV MYSQL_DATABASE=myapp
ENV MYSQL_USER=root
ENV MYSQL_PASSWORD=secret

# Install MySQL client
RUN apt-get update && apt-get install -y mysql-client

# Expose the port on which the application will run
EXPOSE 8080

# Run the application
CMD ["java", "-jar", "api.jar"]
