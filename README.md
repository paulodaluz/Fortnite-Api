# Descrição do Projeto
Este projeto foi desenvolvido com o intuito de atender aos requisitos de um trabalho da faculdade, condizente a matéria de Tópicos de Programação Web.

## Objetivo do Projeto
O objetivo do trabalho é criar um site em react atendendo aos seguintes requisitos:

1) Escolha um tema para ser aplicado ao seu trabalho. Esse tema deve servir de alicerce para todos os requisitos abaixo descritos.

2) O projeto será dividido em duas partes: SITE e ADMINISTRATIVO. Abaixo os requisitos principais de cada uma destas aplicações.

- ### ADMINISTRATIVO
- [x] Deve ser oferecido primeiramente a tela de login, onde somente usuários credenciados podem ter acesso. Nesta mesma tela, deve haver uma opção para registro de novos usuários.

- [x] O usuário terá a opção de ‘Lembre-me, assim quando for acessado o ambiente restrito novamente, já será apresentado o e-mail de acesso. Essa ação é especifica por navegador.

- [x] No ambiente visual do ADMINISTRATIVO deve ser aplicado um Template, como por exemplo, Atlantis-Lite-master, compartilhado na pasta CODES da disciplina.

- [x] As páginas deste ADMINISTRATIVO só poderão ser acessadas se o usuário estiver devidamente logado. Caso contrário, o mesmo deve ser encaminhado a tela de Login.

- [x] Ao acessar o Ambiente Restrito, deve ser apresentado na tela as escolas de Passo Fundo que possuem Enem mínimo de 550. Os dados podem ser obtidos através da API http://educacao.dadosabertosbr.com/api

- [x] Deve ser criado um CRUD com dados referentes a temática desde projeto. Opções como Novo Registro, Lista de Dados e Excluir devem estar presentes nesta opção. É necessário no mínimo dois campos para cada registro (Ex.: nome e e-mail ou marca e placa). Os dados presentes nesta seção são específicas por usuário, não aparecendo o cadastro de outros.

- [x] Deve ser apresentado uma opção de acesso aos RECADOS, os quais serão fornecidos pelo ambiente aberto do projeto, denominado SITE.

- [x] Deve haver uma opção de Logoff, a qual ao ser acionada, deve fazer com que o usuário seja encaminhado a tela de Login e não deve permitir o acesso as telas da ADMINISTRATIVO.

- ### SITE
- [x] Ao executar o projeto, o site será responsável pela tela inicial, apresentado uma mensagem de boas-vindas.

- [x] No rodapé do site, deve ser apresentado as informações do desenvolvedor,
como nome e-mail.

- [x] Deve haver um menu com links para outras duas páginas, as quais deverão
apresentar na primeira delas, uma lista com os dados cadastrados no CRUD
do ADMINISTRATIVO, não importando o usuário, e uma opção para acesso ao
CONTATO.

- [x] Na página de CONTATO, deverá ser oferecido ao usuário um formulário de
contato, com os campos: nome, e-mail, assunto e mensagem, os quais ao
serem enviados, deverão aparecer na ADMINISTRATIVO para todos os
usuários.

- [x] Deve ser utilizado um template a escolha do desenvolvedor, como por
exemplo, woodrox-gh-pages, na pasta Templates da disciplina.


- ### GERAL
- [x] Todos os layouts aplicados devem ser responsivos.

- [x] O Projeto deve ser carregado no github ou bitbucket e compartilhado com o professor o link dos códigos, por e-mail: XXX.

- [x] No readme do projeto no git, deve ser apresentado os dados do
desenvolvedor, bem como uma lista de tecnologias e bibliotecas utilizadas.

- [x] Deve ser utilizado a opção de HashRouter, para que o projeto possa ser
publicado em qualquer tipo de servidor web (apache, tomcat, etc.)

- [x] Deve ser realizado o build da aplicação.

## Tecnologias Utilizadas
As técnologias utilizadas foram NodeJS, NPM,  React e Firebase.

## Bibliotecas utilizadas
* axios versão 0.19.0 ou superior
* bootstrap versão 4.3.1 ou superior
* react versão 16.12.0 ou superior
* react-bootstrap versão 1.0.0-beta.16 ou superior
* react-dom versão 16.12.0 ou superior
* react-router-dom versão 5.0.1 ou superior
* react-scripts versão 3.2.0 ou superior
* react-spinners versão 0.6.1 ou superior
* firebase versão 7.2.1 ou superior

## Como instalar a aplicação
Basta apenas baixar o projeto, abrir a pasta local dele no terminal e digitar o comando `npm install`, que ele ira instalar todas as bibliotecas.

## Como rodar a aplicação localmente
Para startar o projeto você pode digitar o comando `npm start` no diretório do projeto.

Após isso ele irá abrir na porta `3000` no seu localhost, ou seja, basta apenas entrar em `localhost:3000`.

## Como realizar o build da aplicação
Para realizar o build do projeto você deve abrir o terminal na pasta do projeto e digitar o comando `npm run build` no diretório do projeto. Ele irá gerar tudo dentro da pasta build, pronto para ser usado.

## Desenvolvedor
[Paulo Ricardo da Luz Júnior](https://www.linkedin.com/in/paulo-ricardo-da-luz-j%C3%BAnior-5a3953164/)
