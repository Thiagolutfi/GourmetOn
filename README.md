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

A página busca cinco receitas no endpoint `/recipes/random?number=5`. Sem uma chave válida, os pratos não carregam.

## Entendendo o código

React cria a interface em componentes, reunidos em `App.jsx`. Tailwind cuida da estilização e da responsividade.

Em `FoodSection.jsx`, `useState` guarda as receitas e `useEffect` executa a busca ao carregar o componente. `fetch` faz a requisição HTTP à Spoonacular, `await` espera a resposta e `resposta.json()` converte o JSON em dados JavaScript. `setComidas` atualiza o estado e `map()` exibe as receitas. Um `try/catch` mostra uma mensagem se a consulta falhar.

O menu usa um evento de scroll para mudar levemente a opacidade do fundo.

O formulário apenas mostra uma mensagem, sem salvar ou enviar o e-mail. O download e os depoimentos são demonstrativos. Foto inicial: Unsplash; fotos das receitas: Spoonacular.

## Integrantes

- Nome:Thiago Henrique Lutfi Silva | RM: 573531
- Nome: Arthur Kazuo | RM: 572043
- Nome: Bruno Barbuto Muzzi | RM: 573232
- Nome: Daniel Lopes de Oliveira | RM: 573415
- Nome: João Felipe Mello | RM: 573001


## Deploy

Link: https://gourmeton-two.vercel.app/

Na Vercel: selecione Vite, use `npm run build` e a pasta `dist`. Configure `VITE_SPOONACULAR_API_KEY` antes de publicar.

Para entregar um ZIP, inclua os arquivos-fonte, configurações, lock e `.env.example`. Não inclua `.env`, `node_modules`, `dist`, `.pnpm-store` ou `.git`.
