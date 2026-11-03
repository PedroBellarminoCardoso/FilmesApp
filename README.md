# App Lista de Filmes — React Native e Expo

Aplicativo mobile desenvolvido com React Native e Expo para consultar e exibir uma lista de filmes utilizando uma API REST externa. O projeto tem como objetivo demonstrar o consumo de APIs, a navegação entre telas e a estilização de componentes com React Native Paper.

## Objetivo

Desenvolver um aplicativo em React Native com Expo que consuma dados da API OMDb e permita a navegação entre telas por meio do React Navigation.

O projeto faz parte da atividade proposta na Aula 5.

## Funcionalidades

- Consumo de dados da API OMDb.
- Exibição de uma lista de filmes na tela principal.
- Navegação entre telas utilizando React Navigation.
- Estilização dos componentes com React Native Paper.
- Consulta de informações sobre filmes a partir de uma API externa.

## Tecnologias utilizadas

| Tecnologia | Finalidade |
|---|---|
| React Native | Desenvolvimento da interface mobile |
| Expo | Ambiente de desenvolvimento e execução |
| React Navigation | Navegação entre telas |
| React Native Paper | Estilização dos componentes |
| OMDb API | Consulta de informações sobre filmes |

## API utilizada

O aplicativo utiliza a API OMDb (Open Movie Database) para obter informações sobre filmes.

**Endpoint utilizado:**

```text
https://www.omdbapi.com/?s=spider%20man&apikey=1cd66749
```

A consulta retorna resultados relacionados ao termo "Spider Man", que são utilizados para preencher a lista de filmes.

Documentação: https://www.omdbapi.com/

## Como executar o projeto

### Pré-requisitos

- Node.js instalado.
- Expo CLI ou Expo CLI disponível pelo `npx`.
- Expo Go instalado no celular ou um emulador Android/iOS.

### Instalação

1. Clone o repositório:

```bash
git clone URL_DO_REPOSITORIO
```

2. Entre na pasta do projeto:

```bash
cd nome-do-projeto
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o aplicativo:

```bash
npx expo start
```

5. Escaneie o QR Code com o Expo Go ou execute o projeto em um emulador.

## Estrutura do projeto

A organização dos arquivos pode variar conforme a implementação. Uma estrutura sugerida é:

```text
app-lista-filmes/
├── assets/
├── src/
│   ├── components/
│   ├── screens/
│   │   ├── HomeScreen.js
│   │   └── DetailsScreen.js
│   ├── navigation/
│   │   └── AppNavigator.js
│   └── services/
│       └── omdbApi.js
├── App.js
├── package.json
└── README.md
```

## Objetivo acadêmico

Este projeto foi desenvolvido como exercício prático da Aula 5, com foco na aplicação dos conceitos de desenvolvimento mobile utilizando React Native e Expo, integração com APIs REST e navegação entre telas.

## Autor

Desenvolvido como atividade acadêmica.
