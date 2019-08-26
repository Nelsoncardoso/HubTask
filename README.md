* ## Teste Hubtec - Sistema para criação de tarefas

  #####  System dependencies

  - Docker (<https://www.docker.com/>)
  - Docker-compose

  #####  Plataformas
  
  - Ruby on Rails
  - Reactjs

  #####  Instalação e Utilização

  1. Backend

     ```
     cd backend
     
     docker-compose run --rm app bundle install
     
     docker-compose run --rm app bundle exec rails db:create db:migrate db:seed
     
     docker-compose up
     ```

  2. Frontend

     ```
     cd frontend
     
     npm install
     
     npm start
     ```
