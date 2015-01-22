# ui-boilerplate
This boilerplate is a pure front-end web project. Involved nodejs, npm, grunt, less, css, html.
##Installing prerequisites

If you haven't install node or npm, please install them first.

<ul>
<li><a href="http://nodejs.org/">nodejs</a></li>
<li><a href="http://git-scm.com/downloads">git</a></li>
</ul>

##Set up local development env
````
git clone git@github.com:xjsi/ui-boilerplate.git
cd ui-boilerplate
npm install
httpserver
````

If there is no httpserver command, use 'npm install -g httpserver' to install it.

When you see your app is started, go to http://0.0.0.0:8080 you can see a 'Hello world', and then you can start development.

###Development
open a new tab on terminal, go into ui-boilerplate folder
run
```
grunt watch
```
This will watch your index.html and mian.less file, if anything changed, it will re-compile main.less to stylesheet/main.css, refresh your page you will see the changes.
