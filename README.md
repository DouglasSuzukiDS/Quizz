
# Quizz - Plataforma de Avaliação Dinâmica

> Projeto desenvolvido em Next.js 15, React 19, Tailwind CSS, ShadCN UI, Zustand, React Hook Form, Zod e json-server.

---

## 📝 Visão Geral

Este projeto é uma plataforma de avaliação dinâmica, onde usuários respondem a blocos de perguntas (performance, energia, cultura), têm suas respostas validadas e persistidas, e visualizam resultados e rankings em tempo real. O sistema utiliza um mock backend com json-server para simular persistência de dados.

---

## 🚀 Tecnologias Utilizadas

- **Next.js 15**: Framework React para SSR/SSG e rotas de app.
- **React 19**: Biblioteca principal de UI.
- **Tailwind CSS**: Utilitários para estilização rápida e responsiva.
- **ShadCN UI / Radix UI**: Componentes acessíveis e customizáveis (Select, DropdownMenu, Table, etc).
- **Zustand**: Gerenciamento global de estado, com persistência local.
- **React Hook Form + Zod**: Gerenciamento e validação dinâmica de formulários.
- **json-server**: Mock backend para persistência e consulta de dados.
- **axios**: Cliente HTTP para integração com API.

---

## 🔄 Principais Fluxos

### 1. Formulários Dinâmicos
- As perguntas são carregadas dinamicamente de `src/utils/questions.ts`.
- Os formulários são renderizados com React Hook Form, validados com Zod, e estilizados com ShadCN UI.
- O estado das respostas é salvo globalmente via Zustand (com persistência local).

### 2. Persistência e API
- As respostas são enviadas para o mock backend (`json-server`) via axios.
- O arquivo `src/db/db.json` define a estrutura persistida.
- O fluxo de envio e recuperação de dados é abstraído em `src/utils/api.ts`.

### 3. Tabela e Filtros
- A tabela de usuários (`user-table.tsx`) exibe resultados, scores e classificação.
- Filtros dinâmicos por score e classificação usando Select/Input do ShadCN UI.

### 4. Página de Resultados
- Página `/result/[id]` mostra respostas do usuário, score, classificação e botões responsivos.
- Layout responsivo com Tailwind CSS e customizações de gradiente/borda.

### 5. Cálculo de Score
- O score é calculado dinamicamente com base nos índices das respostas (`sum-score.ts`).

---

## ▶️ Como Rodar o Projeto

1. Instale as dependências:
	 ```js
	 npm install
	 ```

2. Inicie o mock backend (json-server):
	 ```js
	 nrpm run server
	 ```

3. Inicie o servidor Next.js:
	 ```js
	 npm run dev
	 ```

4. Acesse [http://localhost:3000](http://localhost:3000) para usar a aplicação.

---

## 💡 Observações e Dicas

- Para customizar perguntas, edite `src/utils/questions.ts`.
- Para alterar validações, edite os schemas em `src/schemas/`.
- Para customizar estilos, edite `src/app/globals.css` e utilize utilitários do Tailwind.
- O Zustand está configurado com persistência automática (localStorage).
- O json-server simula um backend RESTful, ideal para desenvolvimento local.

