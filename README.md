# ui-boilerplate

##Installing prerequisites
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
When you see your app is started, go to http://0.0.0.0:8080 you can see a 'Hello world'

###Development
open a new tab on terminal, go into ui-boilerplate folder
run
```
grunt watch
```
This will watch your index.html and mian.less file, if anything changed, it will re-compile main.less to stylesheet/main.css, refresh your page you will see the changes.
