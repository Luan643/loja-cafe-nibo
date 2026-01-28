
# Coffee Shop Nibo

<img heigth="200px" width="200px" src="./latte-art.png" /> 

## Descrição
Projeto simples com Angular e NodeJS, feito para a entrevista da Nibo. O projeto contém um servidor com NodeJS, Express e MongoDB. Frontend feito Angular v21

## Funcionalidades:

* Cadastrar produto: Nome produto, valor, imagem
* Listagem de produtos, card com todas as informações
* Carrinho de produtos, com funcionalidade de remover produtos
* Hitórico de compras
* Cadastro de usuário
* Login
* Áreas restrita com acesso apenas a pessoa logadas e também áreas retritas a administradores

</br>
</br>

## Execução do Projeto
</br>

### Máquina Local

#### Requisitos: 
<div style="display: flex; gap: 20px; flex-direction: column;">
    <a href="https://nodejs.org/pt/download" style="display: flex; gap: 20px; align-items: center;">
        <img heigth="40px" width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" /> 
            <div>NodeJS</div>
    </a>
    <a href="https://nodejs.org/pt/download" style="display: flex; gap: 20px; align-items: center;">
        <img heigth="40px" width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" /> 
            <div>Angular</div>
    </a>
    <a href="https://nodejs.org/pt/download" style="display: flex; gap: 20px; align-items: center;">
        <img heigth="40px" width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" /> 
            <div>Mongo DB</div>
    </a>
</div>
</br>

#### Executando o Projeto:
* Entrar na pasta <b>back</b> do projeto
* Executar via terminal <b>npm install</b>
* Executar via terminal <b>npm start</b>
  
</br>

* Entrar na pasta <b>front</b> do projeto
* Executar via terminal <b>npm install</b>
* Executar via terminal <b>npm start</b>
* Abrir no navegador <b>http://localhost:4200</b>

</br>

### Docker
#### Requisitos:
<a href="https://nodejs.org/pt/download" style="display: flex; gap: 20px; align-items: center;">
    <img heigth="40px" width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg" /> 
        <div>Docker</div>
</a>

#### Passos para execução:
* Entrar na pasta principal do projeto onde tem o <b>Dockerfile</b>
* Executar o comando para construir a imagem: <b>docker build -t coffee-shop-nibo .</b>
* Executar o comando para rodar um container com a imagem: <b>docker run -p 3000:3000 coffee-shop-nibo</b>
* Abrir no navegador <b>http://localhost:3000</b>
