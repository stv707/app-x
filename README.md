### Simple Website with NodeJS, Express & EJS view engine
### For Azure Kubernetes Services and Azure Container Instances (AKS / ACI )
### How to use this?

> Download Container Image test

* A docker image already available for this code @ https://hub.docker.com/r/stv707/appx

> Build your own Image 

* docker 
```
git clone <this repo>

cd <repo>

docker build . -t <tag_name>
```

* podman
```
git clone <this repo>

cd <repo>

podman build . -t <tag_name>

```

> you can modify the DockerFile to suit your build

> app main program is in bin/www ( eg: changing port )

## Progressing 


[![Actions Status](https://github.com/stv707/app-x/action/workflows/Build%20and%20deploy%20Node.js%20app%20to%20Azure%20Web%20App%20-%20democonaz4002024/badge.svg)]