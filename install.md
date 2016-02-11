[BACKEND]
Some notes on how to create the envirment

create virtual
	envirment virtualenv myenv
	
install Django
	 sudo pip install Django
	 
Install Rest Frame work
	sudo pip install djangorestframework
	sudo pip install markdown
	sudo pip install django-filter
	
copy question folder to server to myenv folder (Using WinSCP or something)

install cros support
	sudo pip install django-cors-headers
	
start the dev server
	sudo python manage.py runserver 0.0.0.0:8000
	
	
[CLIENT]
create client folder in your htdocs folder
	mkdir client
	
install ionic
	sudo npm install -g cordova ionic
	
create app in client folder
	sudo ionic start myApp blank

run dev server from myenv/client/myApp
	sudo ionic serve --address 0.0.0.0

copy www/js/app.js and index.html (Using WinSCP or something)
	
browse to app
	browse to http://<serverip>:8100/