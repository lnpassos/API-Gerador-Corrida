# Desafio Técnico: Gerador de Corridas

### Segue a documentação para uso da aplicação

- Projeto realizado com `NodeJS` e `SQlite`

# Tecnologias Utilizadas
- Foi utilizado `Express` para desenvolver a API.

- Escolhi o `Express` por sua simplicidade e eficiência na criação de APIs rápidas. A familiaridade com o framework e a experiência de uso nos últimos meses também contribuíram para essa escolha.

- `Nodemon`, ferramenta para desenvolvimento com reinicialização automáticao.

- `SQLite` como Banco de dados.

- Utilizado para testes unitários o `Jest`, pesquisando rápidamente vi que era muito prático de usa-lo.

# Decisões técnicas
- Segui o melhor padrão que conheço para criação de API's no mercado, separando cada requisição em uma pasta chamada `Routes` para facilitar a `Manutenção` e também conseguir trabalhar `Testes Unitários` sem muitos problemas, deixando os `modelos` de Banco de Dados em uma pasta chamada `Controller`, isolando assim cada método importante da aplicação.

- Seguindo um requisito importante para a aplicação, separei os `testes` em uma pastas chamada `Tests`, seguindo boas práticas do mercado, facilitando na hora de criar e testar uma nova `Feature`.

# Como usar
### Pré requisitos:
- Alguma ferramenta para testar a API (Ex: `Insomnia` ou `Postman`)
- `Node JS` e `npm` instalados no sistema.
- `Nodemon` instalado no sistema -> `npm install nodemon`

 ### Iniciando o projeto:
- Na pasta raiz, inicie o projeto com o comando `npm run dev`

# Endpoints da API

### GET
### `src/routes/get-corrida.js`
- A requisição GET deve ser chamada no seguinte endereço: `http://localhost:3000/` para retornar o endereço raiz
ou `http://localhost:3000/corridas` para retornar todas as `Corridas`.

### POST
### `src/routes/create-corrida.js`
- A requisição POST deve ser chamada no seguinte endereço: `http://localhost:3000/corrida` para criar uma nova `corrida`,
passando os seguintes parâmetros em formato `JSON `(em sua ferramenta de teste):

{
	"nome": "Leonardo", // Sendo aqui o nome do motorista da corrida.
	"carro": "Audi A3", // Sendo aqui o modelo do carro.
	"cor": "Preto" // Sendo aqui aqui a cor do carro.
}

OBS: Por padrão é gerado um `status` e um `id`.
- O `status` por padrão vem como `"ATIVO"`, pois acaba de iniciar uma nova corrida.
- O `id` é gerado únicamente para cada novo usuário.

### PUT
### `src/routes/update-corrida.js`
- A requisição PUT deve ser chamada no seguinte endereço: `http://localhost:3000/corrida` para atualizar o `status` de uma `corrida`, passando os seguintes parâmetros em formato `JSON`.

{
	"id": 4, // O ID que deverá ser alterado o `status`.
	"status": "cancelado" // Para o novo `status`, nesse caso está sendo alterado para o `status` CANCELADO.
}

### TESTES
- Para testar, foi utilizado o `Jest`.
- Para realizar o teste unitário, pare sua aplicação apertando CTRL C e digite o seguinte comando: `npm test`.
- O código de teste se encontra na pasta `src/tests/create-corrida.test.js`. O código testado foi para verificar se
está criando uma nova Corrida e tendo seus `Callbacks` sendo retornados corretamente ao usuário, podendo conferir diretamente no banco de dados ou na requisição `GET` se a `corrida` foi ou não criada.

# NOTAS ADICIONAIS / OBSERVAÇÕES / VALIDAÇÕES 
- Foi realizado toda a aplicação base solicitada, acrescentei também algumas validações básicas, sendo elas:

1 - Ter apenas `3` tipos de `status` possiveis, sendo eles: `ATIVO`, `FINALIZADO`e `CANCELADO`, podendo assim trabalhar ``MINIMAMENTE`` com cases reais.

2 - Transformar todas `Strings` em `UperCase`, assim evitando problemas na hora de testar a API, digitando: `cANCelaDo` ou algo do tipo, padronizando também no Banco de Dados.

3 - A corrida ja iniciar como `ATIVO`, pois seria impossivel uma corrida iniciar como `CANCELADO` ou algo do tipo, e também não podendo mais voltar para `ATIVO`, afinal uma `corrida` finalizada, está finalizada (Claro, ainda poderia haver muitas outras situações e validações para fazer, essa serve como uma ideia apenas).

4 - `>> NÃO <<` realizei algumas validações como `campos vazios`, nomes contendo `números` ou algo do tipo, pois o intuito seria apenas a criação / cancelamento de `corridas`, então foquei primordialmente em um código `limpo`, `bem estruturado` e de `fácil manutenção`.

5 - Criei os campos no Banco de Dados apenas para realizar o teste, entendo que em um case real haveria outros campos obrigatórios. Mas claro, os campos criados são fundamentais para localização e segurança, exemplo:
- Saber o nome do motorista.
- Saber qual carro está usando e sua cor, facilitar localização.
- Status para controlar a corrida.
- Etc..
