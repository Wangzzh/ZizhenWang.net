### Login to EC2 Ubuntu

SSH into host.
```
sudo ssh -i zizhen.pem ubuntu@zizhenwang.net
```
[AWS Documentation: Connect Using SSH](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html)


### Set up nginx
```
sudo apt update
sudo apt install nginx
sudo systemctl start nginx
```

Now the website should be accessible in browser via [zizhenwang.net](http://zizhenwang.net). It will show a welcome page of Nginx.

Change nginx configuration to route http to react port 3000.

```
sudo vim /etc/nginx/nginx.conf

# change the http part
http {
        server {
                listen 80;

                location / {
                        proxy_pass  http://127.0.0.1:3000;
                        proxy_set_header Host $host;
                        proxy_set_header X-Real-IP $remote_addr;
                        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                }
        }
}

```

### Install react

Install Node.js v17. [Reference](https://github.com/nodesource/distributions/blob/master/README.md)

```
curl -fsSL https://deb.nodesource.com/setup_17.x | sudo -E bash -
sudo apt-get install -y nodejs
node -v
npm -v
```

It should show the latest node version is v17 and npm is V8.5.5.

Clone from github repository. This may require setting up ssh keys on github.

```
git clone git@github.com:Wangzzh/ZizhenWang.net.git
```

Install dependencies and start react app.
```
npm install
npm start
```