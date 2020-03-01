# Laravel Passport & Vue - authentication

### Versions:

-   Laravel v.5.7
-   Laravel Passport v.7.0
-   Vue v.2.5.22
-   Vuex v.3.0.1

### Installation:

After the git clone, run this commands & editions one after one to start the application:

##### \* composer install

##### \* npm install

##### \* php artisan key:generate

##### \* set up your database user & password in the .env file

##### \* create the mysql database and set the name to .env file

##### \* php artisan migrate

##### \* php artisan passport:install

##### \* copy the new generated passport-client secret from console or from your database and paste in in your .env key PASSPORT_CLIENT_SECRET

##### \* php artisan optimize

##### \* php artisan serve --host=0.0.0.0

##### \* php artisan config:cache --env=testing
