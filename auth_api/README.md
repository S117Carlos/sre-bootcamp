# Implementation Checklist
- [X] API Code
- [X] Services Code
- [X] Unit-tests
- [X] Dockerfile
- [X] It Compiles
- [X] It runs

# Api Services
- Receives a valid username and password and returns a JWT.
- Returns protected data with a valid token, otherwise returns unauthenticated.

# Run with Docker

- Pull the image from docker hub
```
    docker pull whalehub117/wize-carlos-guerrero:latest
```
- Run the app
```
    docker container run -d -p 8000:8000 whalehub117/wize-carlos-guerrero:latest
```