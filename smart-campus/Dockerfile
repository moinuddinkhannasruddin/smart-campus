# Use a base image with Java and MySQL installed
FROM maven:3.8.5-openjdk-17 as build

WORKDIR /app

COPY . .

# Copy the built JAR file
RUN mvn clean package -DskipTests

FROM openjdk:17.0.1-jdk-slim
COPY --from=build /app/target/api.jar /app/api.jar

# Set the environment variables for the MySQL database connection
#ENV MYSQL_HOST=localhost
#ENV MYSQL_PORT=3307
#ENV MYSQL_DATABASE=smart_campus
#ENV MYSQL_USER=root
#ENV MYSQL_PASSWORD=root
#
## Install MySQL client
#RUN apk update && apk add mysql-client

# Set the default profile to 'development'
ENV SPRING_PROFILES_ACTIVE=dev

# Expose the port on which the application will run
EXPOSE 8080

# Run the application
CMD ["java", "-jar", "/app/api.jar"]
