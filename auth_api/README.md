# Implementation Checklist
- [ ] API Code
- [ ] Services Code
- [ ] Unit-tests
- [ ] Dockerfile
- [ ] It Compiles
- [ ] It runs

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