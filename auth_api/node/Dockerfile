FROM node:9-alpine
# App must run on port 8000
# Add your instructions to dockerize the application

# Get env variables
ARG DB_HOST
ARG DB_PORT
ARG DB_USER
ARG DB_PASSWORD
ARG DB_SCHEMA
ARG JWT_SECRET

# Create app directory
WORKDIR /src/

# Install app dependencies
COPY ./package*.json ./

RUN npm install
# Bundle app source
COPY ./ ./

EXPOSE 8000

CMD [ "npm", "start" ]

