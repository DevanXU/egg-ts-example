## Cautions
- *Database*
  > The `MySQL` docker is linked together with `nodejs` docker, and hard coding in `config/config.default.ts`, `host` of section `config.sequelize`. The `host` should be ALWAYS kept the same as `links` in `docker-compose.yml`, otherwise the service will be failed.
- *Volumes*
  > Do remember to create `volumes` to be mounted on the docker, and update `docker-compose.yml` accordingly.


## Service Setup
**Use 'docker-compose' to setup the whole service.**
- *Prerequisite*
  > Create the database first. This will be not part of the service setup, for data security consideration. Because you would setup/update the service from time to time, but you definitely don't want to touch the data.

- *Setup*
  > Run `docker-compose up` to setup the nodejs and mysql service.

- *Service Down*
  > Run `docker-compose down` to tear down the services.


## [ELK-Docker setup for logs analysis](https://elk-docker.readthedocs.io)

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