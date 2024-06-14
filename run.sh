docker rm -f simplejs
docker build -t simplejs .
docker run -d -p 8111:8111 --name simplejs simplejs
docker logs simplejs