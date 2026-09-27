# GourmetOn

Landing page de um aplicativo fictício de delivery. Projeto acadêmico do 2º semestre de Engenharia de Software para praticar React e consumo de APIs.

## Tecnologias

JavaScript, React, Vite, Tailwind CSS, Fetch API, JSON e Spoonacular API.

## Como executar

Com Node.js 22.12 ou superior instalado, execute na pasta do projeto:

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal. Para gerar a versão de publicação:

```bash
npm run build
```

## Configurar a API

1. Obtenha sua chave em https://spoonacular.com/food-api.
2. Copie `.env.example` para `.env`, na raiz do projeto.
3. Preencha `VITE_SPOONACULAR_API_KEY=sua_chave`.
4. Reinicie o servidor com `npm run dev`.

A página busca cinco receitas no endpoint `/recipes/random?number=5`. Sem uma chave válida, os pratos não carregam. O `.env` não deve ser enviado ao Git. Em um projeto Vite frontend, a chave fica visível no navegador.

## Entendendo o código

React cria a interface em componentes, reunidos em `App.jsx`. Tailwind cuida da estilização e da responsividade.

Em `FoodSection.jsx`, `useState` guarda as receitas e `useEffect` executa a busca ao carregar o componente. `fetch` faz a requisição HTTP à Spoonacular, `await` espera a resposta e `resposta.json()` converte o JSON em dados JavaScript. `setComidas` atualiza o estado e `map()` exibe as receitas. Um `try/catch` mostra uma mensagem se a consulta falhar.

O menu usa um evento de scroll para mudar levemente a opacidade do fundo.

O formulário apenas mostra uma mensagem, sem salvar ou enviar o e-mail. O download e os depoimentos são demonstrativos. Foto inicial: Unsplash; fotos das receitas: Spoonacular.

## Integrantes

- Nome: ____________________ | RM: ____________________
- Nome: ____________________ | RM: ____________________
- Nome: ____________________ | RM: ____________________

## Deploy

Link: ____________________

Na Vercel: selecione Vite, use `npm run build` e a pasta `dist`. Configure `VITE_SPOONACULAR_API_KEY` antes de publicar.

Para entregar um ZIP, inclua os arquivos-fonte, configurações, lock e `.env.example`. Não inclua `.env`, `node_modules`, `dist`, `.pnpm-store` ou `.git`.
