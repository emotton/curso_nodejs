# typeorm
TypeORM - Exemplos

MANUAL
======

npm install typeorm --save

npm install reflect-metadata --save

npm install @types/node --save-dev

npm install typeorm -g

SEMI-AUTOMATICO
==========

typeorm init --name <projeto> --database postgres
cd <projeto>
npm install

yarn typeorm migration:generate
# cria uma migration manualmente

yarn typeorm migration:create -n CreateUser

yarn typeorm migration:run

yarn typeorm migration:revert

yarn typeorm migration:show

yarn typeorm query "select * from <tabela>"

yarn typeorm migration:generate -- -n <nome>

# Criar uma entity

npx typeorm entity:create -n <entity>


Referências
===========

- Preparando Ambiente

https://www.youtube.com/watch?v=ZBlW5IBdhKk&list=PLDqnSpzNKDvn-3cpMf3yPn7gTnb3ooy4b&index=1

- Primeiro projeto

https://www.youtube.com/watch?v=6o0Vw0665kw&list=PLDqnSpzNKDvn-3cpMf3yPn7gTnb3ooy4b&index=2

- Migrations

https://www.youtube.com/watch?v=f--l_P6pa44&list=PLDqnSpzNKDvn-3cpMf3yPn7gTnb3ooy4b&index=3

- Decorators e Models

https://www.youtube.com/watch?v=EHnTVyvr2nw&list=PLDqnSpzNKDvn-3cpMf3yPn7gTnb3ooy4b&index=4

- Repositories

https://www.youtube.com/watch?v=FDnuLtSxEEQ&list=PLDqnSpzNKDvn-3cpMf3yPn7gTnb3ooy4b&index=5

- Synchronize e Migrations

https://www.youtube.com/watch?v=57E8LcqisbQ&list=PLDqnSpzNKDvn-3cpMf3yPn7gTnb3ooy4b&index=6

- Heroku - Deploy (Typescript. TypeORM, Postgres)

https://www.youtube.com/watch?v=DVTceFeaAdc&list=PLDqnSpzNKDvn-3cpMf3yPn7gTnb3ooy4b&index=7

- Relacionamentos

https://www.youtube.com/watch?v=3OKyi1bD8PI&list=PLDqnSpzNKDvn-3cpMf3yPn7gTnb3ooy4b&index=8

- Registro em Cascata

https://www.youtube.com/watch?v=w7oWwiGfUso&list=PLDqnSpzNKDvn-3cpMf3yPn7gTnb3ooy4b&index=9

- Inserção/Vinculação na relação ManyToMany

https://www.youtube.com/watch?v=ZvlSwIDY_Q4&list=PLDqnSpzNKDvn-3cpMf3yPn7gTnb3ooy4b&index=10

- Validação com class-validator

https://www.youtube.com/watch?v=SzJYtQkZVEA&list=PLDqnSpzNKDvn-3cpMf3yPn7gTnb3ooy4b&index=11

- Herança, herança de tabela única e composição

https://www.youtube.com/watch?v=NDwS1WnJwxk&list=PLDqnSpzNKDvn-3cpMf3yPn7gTnb3ooy4b&index=12

- Geração automática de models a partir do banco de dados

https://www.youtube.com/watch?v=JAB9k_wFnUc&list=PLDqnSpzNKDvn-3cpMf3yPn7gTnb3ooy4b&index=13

- Automatizando a execução de migrações com hooks do NPM

https://www.youtube.com/watch?v=di_U3PLM300&list=PLDqnSpzNKDvn-3cpMf3yPn7gTnb3ooy4b&index=14

- Cache de query no banco de dados e no Redis

https://www.youtube.com/watch?v=_PQwWUSq1R8&list=PLDqnSpzNKDvn-3cpMf3yPn7gTnb3ooy4b&index=15

- Transformers e criptografia AES com typeorm encrypt

https://www.youtube.com/watch?v=8eiqhhKQH70&list=PLDqnSpzNKDvn-3cpMf3yPn7gTnb3ooy4b&index=16

- Git dicas

https://www.youtube.com/watch?v=32m_dhr3P70&list=PLDqnSpzNKDvn-3cpMf3yPn7gTnb3ooy4b&index=17