# Cashback

### :coffee: Requisitos do teste

O teste é composto por uma API, com rotas, para o cadastro de clientes, validação de login, cadastro de pedidos, que por sua vez, gera um cashback dependendo do valor do pedido que está sendo inserido no sistema.

Os valores de cashbacks aplicados em cada compra são:

- para compras até \$1000 - 10% de cashback;
- para compras ate entre $1000 e $1500 - 15% de cashback;
- para compras acima de \$1500 - 20% de cashback;

Além desses pontos, é necessário o consumo de uma API Externa para retornar o valor de cashback acumulado para determinado cliente.

Para salvar os dados, foi utilizado o SQLite.

Foi utilizado também o Prettier (pré-configurado), e os lints necessários para manter o padrão do projeto (commitlin, eslint, husky e lint-staged)

### Bibliotecas utilizadas

- [nodejs](https://nodejs.org/en/)
- [express](https://expressjs.com/pt-br/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [axios](https://www.npmjs.com/package/axios)
- [app-root-path](https://www.npmjs.com/package/app-root-path)
- [bcryptjs]https://www.npmjs.com/package/bcryptjs()
- [email-validator](https://www.npmjs.com/package/email-validator)
- [morgan](https://www.npmjs.com/package/morgan)
- [winston](https://www.npmjs.com/package/winston)
- [sequelize](https://sequelize.org/)
- [sqlite3](https://www.sqlite.org/index.html)
- [jest](https://jestjs.io/)

### Estrutura do projeto

```
__tests__           # Arquivo de testes da aplicação
src                 # Códigos do projeto
├─ app              # Arquivos da aplicação
├── builders        # Constroi o retorno dos pedidos
├── config          # Configuração referente aos logs (winston)
├── controllers     # Controle da aplicação
├── helpers         # Arquivos de ajuda para aplicação
├── middleware      # Arquivo responsável pela autenticação do cliente
├── models          # Modelos das tabelas do banco de dados
├── providers       # Arquivo para acesso a API externas
├── repositories    # Arquivos responsáveis por persistir dados
├── routes          # Arquivos de routa da aplicação
├── services        # Arquivos de execução dos controllers
├─ database         # Arquivos referentes a tudo que envolve banco de dados
├─ logs             # Arquivo de logs do sistema (error e combine)
├─ app.js           # Classe inicial do sistema
├─ server.js        # Classe que inicia o servidor
```

### Instruções para rodar a API

```
# Inicializando o projeto
$ Faça o download da pasta do projeto e depois iniciar com `npm install`

# Para executar os teste
$ npm test

# Para executar a aplicação
$ npm run start

```

### Sobre as rotas criadas

- POST/clients - Salva as informações do cliente.
- POST/sessions - Faz a validação do login do cliente para que seja possível salvar o pedido.
- POST/orders - Salva as informações do pedido.
- GET/orders - Faz a busca dos pedidos, com paginação.
- GET/cashback_accumulated - Faz a busca do cashback acumulado de um cliente específico.

### Formato dos arquivos

- POST/clients

```javascript
{
	"name": "sasdads",
	"document": "10766827751",
	"email": "lucas@teste.com",
	"password": "1234"
}
```

- POST/sessions

```javascript
{
	"email": "lucas@teste.com",
	"password": "1234"
}
```

- POST/orders

```javascript
{
    "code": "14",
    "value": "1233.21",
    "date": "2020-01-10",
    "document": "10766827749"
}

{ Authentication Bearer $token}
```

- GET/orders?page=0

- GET/cashback_accumulated?document=00000000090

- Se utilizar o Insomnia, é possível importar as rotas por aqui:
  <a href="https://insomnia.rest/run/?label=Cashback&uri=https%3A%2F%2Fgithub.com%2Flucasalvine%2Fcashback%2Fblob%2Fmaster%2FInsomniaRoutes.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>

### Thats it ! :coffee:

---

by Lucas Cunha
