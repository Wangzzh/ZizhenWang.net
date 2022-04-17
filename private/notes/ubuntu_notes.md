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

### Install react

Install Node.js v17. [Reference](https://github.com/nodesource/distributions/blob/master/README.md)

```
curl -fsSL https://deb.nodesource.com/setup_17.x | sudo -E bash -
sudo apt-get install -y nodejs
node -v
npm -v
```

It should show the latest node version is v17 and npm is V8.5.5.

Create sample react app and start server.
```
npm start
```