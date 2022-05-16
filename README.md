# Challenge-NodeJS-ReactJS


### Adicionando hosts para o nginx encontrar a aplicação

`sudo nando /etc/hosts`
`
127.0.0.1	api.challenge.local
127.0.0.1	app.challenge.local
` 

### Iniciando aplicação

`docker-compose up -d`
`docker-compose exec api composer install`
`docker-compose exec api php artisan migrate`