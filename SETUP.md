

### [ELK-Docker setup for logs analysis](https://elk-docker.readthedocs.io)

- Pull ELK docker image
`docker pull sebp/elk`

- Launch service
```
docker run -p 5601:5601 -p 9200:9200 -p 5044:5044 -it --name elk sebp/elk
```

OR

```
docker-compose up elk
```
The `docker-compose.yml` file will be as below:
```
elk:
  image: sebp/elk
  ports:
    - "5601:5601"
    - "9200:9200"
    - "5044:5044"
```