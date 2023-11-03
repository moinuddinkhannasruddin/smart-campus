# Use a base image with Java and Maven installed
FROM maven:3.8.4-openjdk-17-slim AS build

# Set the working directory
WORKDIR /app

# Copy the pom.xml file
COPY pom.xml .

# Download the dependencies
RUN mvn dependency:go-offline -B

# Copy the source code
COPY src ./src

# Build the application
#RUN mvn package -DskipTests

# Use a base image with Java and MySQL installed
FROM openjdk:17-jre-slim

# Set the working directory
WORKDIR /app

# Copy the built JAR file from the previous stage
COPY --from=build /app/target/api.jar .

# Set the environment variables for the MySQL database connection
ENV MYSQL_HOST=localhost
ENV MYSQL_PORT=3306
ENV MYSQL_DATABASE=smart-campus
ENV MYSQL_USER=root
ENV MYSQL_PASSWORD=12345678

# Expose the port on which the application will run
EXPOSE 8080

# Run the application
CMD ["java", "-jar", "myapp.jar"]
