### to build the dev Dockerfile
* docker build -f Dockerfile.dev
* docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app <image_id>

###using docker-compose:
* docker-compose up --build

## how to launch the pro Dockerfile
* docker build .
* docker run -p 8080:80 <image_id>