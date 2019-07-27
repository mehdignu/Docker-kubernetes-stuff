### how to run it:

* docker build .
* docker run [ID]

#### or

* docker build -t mehdignu/redis:latest .
* docker run mehdignu/redis


### to manually generate an image out of a container (not recommended practice):

* docker run -it  alpine sh
* apk add --update redis

* Open second terminal window
* docker ps -> get ID of the running container
* docker commit -c 'CMD ["redis-server"]' ID
* output is the ID of the container
* docker run ID 