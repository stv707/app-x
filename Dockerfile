# We use node 12 - OLD ( its ok for DEMO )
FROM registry.access.redhat.com/ubi8/nodejs-12:latest

USER root
# Create app directory
WORKDIR /usr/src/app

# Install app dependencies and mssql-tools for sqlcmd
COPY package.json .
COPY package-lock.json .
RUN npm install --only=production

# Bundle app source
COPY . .
EXPOSE 3000

# Use entrypoint to trigger script
ENTRYPOINT /bin/bash ./entrypoint.sh
