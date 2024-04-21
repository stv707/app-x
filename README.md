[![Board Status](https://dev.azure.com/CogNitozCOM/86e13782-6e00-4271-add5-df8a0f70354c/6b50bde2-48a0-4e3a-b983-654dfc1ace96/_apis/work/boardbadge/9bfe025f-b39f-41e7-bab1-92773ac4018f)](https://dev.azure.com/CogNitozCOM/86e13782-6e00-4271-add5-df8a0f70354c/_boards/board/t/6b50bde2-48a0-4e3a-b983-654dfc1ace96/Microsoft.RequirementCategory)
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
