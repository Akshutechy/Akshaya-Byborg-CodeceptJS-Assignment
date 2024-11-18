# Use the Codecept image as the base image
FROM codeceptjs/codeceptjs:latest

# Set the working directory inside the container
WORKDIR /tests

# Copy your application code into the container
COPY . /tests

# Expose port 80
EXPOSE 80

# Install Java and other dependencies
RUN apt-get update && \
    apt-get install -y openjdk-11-jre-headless && \
    yes Y | apt install openjdk-11-jdk --fix-missing && \
    npm install && \
    npm install playwright && \
    npm install -g http-server

# Set environment variables
ENV JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64

# Command to run Codecept tests and serve Allure report
CMD ["npm", "test:docker"]