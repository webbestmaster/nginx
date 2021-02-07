### Nginx

Install

```
$ sudo apt-get install -y --no-install-recommends nginx
```

1.9.x
```
$ sudo add-apt-repository ppa:chris-lea/nginx-devel -y
$ sudo apt-get update
$ sudo apt-get install nginx
```


Run
```
$ /usr/bin/nginx [-t] [-c ~/my-nginx.conf] [-g 'daemon off;']
```

`-c` - Specify which configuration file NGINX should use instead of the default.
`-t` - Don’t run, just test the configuration file. NGINX checks configuration for correct syntax and then try to open files referred in configuration. \
`-g 'daemon off;'` - Don't run as daemon

Stop
```
$ sudo nginx -s stop
```

Restart
```
$ sudo nginx -s reload
```

### image_filter
The ngx_http_image_filter_module module (0.7.54+) is a filter that transforms images in JPEG, GIF, PNG, and WebP formats.

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
$ docker stop <CONTAINER ID>
```

Remove image
```
$ docker image rm -f <image id>
```


### Util

Apache Benchmark: install and run
```
$ sudo apt-get install apache2-utils
$ ab -n 100 -c 5 http://localhost:9090/image/800x600/nginx-logo.png
```
