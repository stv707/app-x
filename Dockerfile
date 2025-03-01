# We use node 22 - NEW 
FROM node:22-slim

# Uncomment to use node 14 base image from Redhat UBI
#FROM registry.access.redhat.com/ubi8/nodejs-14:latest

#Set use Root to Set Workdir, to copy  and to install npm modules 
USER root

# Set app directory
WORKDIR /usr/src/app

#Copy all artifacts into image
COPY . .

# Install app dependencies ( node modules )
RUN npm install

# Expose Port in the Image
EXPOSE 3000

# Reset user from root to node
USER node

# Use entrypoint to trigger script or use CMD to run direct ( uncomment and comment one )
# We use ENTRYPOINT! 
#ENTRYPOINT /bin/bash ./entrypoint.sh

# We use CMD!
CMD [ "node", "./bin/www" ]