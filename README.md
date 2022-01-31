<h1  align="center"> DELIVERY API </h1>

<p  align="center"> Api de entrega de Encomendas Cliente-Entregador </p>

<h1  align="center">

<a  href="[https://nodejs.org/](https://nodejs.org/)">🔗 NodeJS </a>

</h1>

<p  align="center">🚀 API para Entrgas de encomendas entre Cliente-Entregador até sua finalização na entrega da encomenda.</p>
<p  align="center">
<a  href="#instalar">Como Instalar</a> •
<a  href="#features">Features</a> •
<a  href="#tecnologias">Tecnologias</a> •
<a  href="#licença">Licença</a> •
<a  href="#autor">Autor</a>
</p>

### Instalar

<p> Faça o download do projeto para sua maquina via terminal com git clone [https://github.com/danivaldosousa/delivery.git](https://github.com/danivaldosousa/delivery.git) </p>

<p> Depois de baixado, acesse a pasta do projeto e rode o comando abaixo no terminal de sua maquina, e será instalado todas dependências do projeto.</p>

```
yarn

```

<p> Configurar o arquivo .env_example primeiro renomeando para .env e posteriormente substituindo as váriaveis de conexão para as suas informações correspondete.</p>
<p> Para a criação da Base de dados em Postgres execute o comando.</p>

```
yarn prisma migrate dev

```

<p> Para o executar o programa em modo de desenvolvimento execute a linha abaixo.</p>

```
yarn dev

```

<p> Para o executar o programa em modo de Produção crie a pasta .dist na raiz do projeto, e depois execute o comando abaixo.</p>

```
yarn tsc

```

e depois

```
yarn build

```

### Tecnologias

- [ ] NodeJS \*
- [ ] Typescript \*
- [ ] Express \*
- [ ] Os principios do SOLID
- [ ] JWT - JsonWebToken
- [ ] dotenv
- [ ] [Prisma.io](http://prisma.io/) / ORM e gerenciador dos dados (SQlite, Postgres, Mysql, MongoDB)
- [ ] Swagger / Para documentação da API e teste em browse dos recursos. (Para Atualizaçõe Futuras)

### Features

- [x] Cadastro de Clientes
- [x] Cadastro de Entregadores
- [x] Cadastro de encomendas pelo cliente
- [x] Pesquisa de encomendas livres - Entregador
- [x] Pesquisa de encomendas por cliente
- [x] Atualização entrega de encomenda - Entragador

### Recursos

## /client/ - Recurso para cadastro de clientes.

```
<http://localhost.3333/client>

```

## /client/authenticate/ - Recurso para autenticação do cliente no serviço de entrega.

```
<http://localhost.3333/i/client/authenticate/>

```

## /deliveryman - Recurso para cadastro do Entregador.

```
<http://localhost.3333/deliveryman>

```

## /deliveryman/authenticate - Recurso para a autenticação do Entregdor no serviço de entrega.

```
<http://localhost.3333/deliveryman/authenticate>

```

## /delivery - Recurso para cadastro de uma Entrega

```
<http://localhost.3333/delivery>

```

## /delivery/available - Recurso para pesquisa do Entregas sem entregador

```
<http://localhost.3333/delivery/available>

```

## /delivery/updateDeliveryman/:id - Recurso para o entregador assumir uma entrega para si

```
<http://localhost.3333/delivery/updateDeliveryman/:id>

```

## /client/deliveries - Recurso para exibir todas as Entregas do cliente

```
<http://localhost.3333/client/deliveries>

```

## /deliveryman/deliveries - Recurso para exibir todas as Entregas do Entregador

```
<http://localhost.3333/deliveryman/deliveries>

```

### Licença

MIT License

### Autor

<p> **Danivaldo Sousa** </p>

<img  src="[https://img.shields.io/static/v1?label=Blog&message=DanivaldoSousa&color=7159c1&style=for-the-badge&logo=ghost](https://img.shields.io/static/v1?label=Blog&message=DanivaldoSousa&color=7159c1&style=for-the-badge&logo=ghost)"/>
