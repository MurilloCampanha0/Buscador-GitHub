# gh-explorer 🔍

Busque qualquer perfil do **GitHub** e explore os repositórios mais estrelados em segundos. Uma aplicação front-end feita para praticar consumo de API, gerenciamento de estado e design de interface.

🔗 **Demo online:** [buscador-git-hub-alpha.vercel.app](https://buscador-git-hub-alpha.vercel.app/)


✨ Funcionalidades

- Busca de qualquer usuário público do GitHub pelo nome de usuário
- Exibe avatar, nome, bio e estatísticas (repositórios, seguidores, seguindo)
- Lista os repositórios ordenados pelos mais estrelados
- Mostra a linguagem (com a cor oficial do GitHub), estrelas e data da última atualização
- Tratamento de estados: tela inicial, carregamento, erro e usuário não encontrado
- Layout totalmente responsivo (funciona bem no celular)
- Acessível: navegação por teclado e suporte a `prefers-reduced-motion`

🛠️ Tecnologias

- [React](https://react.dev/) — biblioteca de interface
- [Vite](https://vite.dev/) — build e servidor de desenvolvimento
- **CSS puro** com variáveis (sem framework de estilo)
- **Fetch API** para consumir a [API pública do GitHub](https://docs.github.com/rest)

## 🚀 Como rodar o projeto

Você precisa ter o [Node.js](https://nodejs.org/) instalado (versão 18 ou superior).

```bash
# 1. Instale as dependências
npm install

# 2. Rode em modo de desenvolvimento
npm run dev
```

Depois abra o endereço que aparecer no terminal (geralmente `http://localhost:5173`).

Para gerar a versão de produção:

```bash
npm run build
```

## 📁 Estrutura do projeto

```
src/
├── api/
│   └── github.js          # chamadas à API do GitHub
├── components/
│   ├── SearchBar.jsx       # barra de busca
│   ├── UserCard.jsx        # cartão do perfil
│   ├── RepoCard.jsx        # cartão de um repositório
│   ├── RepoList.jsx        # grade de repositórios
│   └── StateMessage.jsx    # mensagens de estado (vazio/carregando/erro)
├── utils/
│   └── format.js           # cores de linguagem, datas e números
├── App.jsx                 # componente principal
├── main.jsx                # ponto de entrada
└── index.css               # estilos e tokens de design


Feito por [Murillo Campanha](https://github.com/MurilloCampanha0)
