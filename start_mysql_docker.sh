docker rm test-mysql
docker run --name=test-mysql -v /home/devan/data/mysql/test:/var/lib/mysql -e MYSQL_ALLOW_EMPTY_PASSWORD=yes -d mysql --default-authentication-plugin=mysql_native_password