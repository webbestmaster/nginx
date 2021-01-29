### Nginx

Install

```
sudo apt-get install -y --no-install-recommends nginx
```

Run
```
$ /usr/bin/nginx [-t] [-c ~/my-nginx.conf]
```

`-t` - Don’t run, just test the configuration file. NGINX checks configuration for correct syntax and then try to open files referred in configuration. \
`-c` - Specify which configuration file NGINX should use instead of the default.

```
$ sudo nginx -s stop
```

```
$ sudo nginx -s reload
```

### Docker

Build
```
$ docker build -t my-best-app:0.0.1 .
```

`-t` - Name and optionally a tag in the 'name:tag' format


Run
```
docker run [-d] -p "8000:9090" my-best-app:0.0.1
```

Use key `-d` to exit from terminal without stop server\image

`-p` - 8000 - your local port to open app, 9090 - server's port of app inside docker

Image list
```
$ docker image ls
```

Running images
```
$ docker ps
```

Stop image, get image name from `$ docker ps`
```
$ docker stop <image name>
```

Remove image
```
$ docker image rm -f <image id>
```
