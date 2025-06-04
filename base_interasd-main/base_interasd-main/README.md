This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

# 📘 InterASD – A Igreja Interagindo

Sistema de atendimento digital durante os cultos e programações da igreja, baseado na leitura de QR Codes que direcionam os fiéis a um formulário categorizado. Cada interação gera uma fila de atendimento, otimizando o cuidado com os membros e visitantes.

---

## 📌 Sumário

-   [Visão Geral](#visão-geral)
-   [Funcionamento do QRCode](#funcionamento-do-qrcode)
-   [Categorias do Formulário](#categorias-do-formulário)
-   [Fluxo de Atendimento](#fluxo-de-atendimento)
-   [API REST - Endpoints](#api-rest---endpoints)
    -   [🔑 Autenticação](#-autenticação)
    -   [📋 Formulários](#-formulários)
    -   [👤 Usuário](#-usuário)
    -   [🛠️ Administrador](#️-administrador)
-   [🧩 Relacionamentos e Estrutura](#-relacionamentos-e-estrutura)
-   [📎 Observações](#-observações)

---

## 📖 Visão Geral

Durante os cultos, um QR Code será projetado em momentos estratégicos. Ao escanear, o membro é direcionado a um formulário já identificado com a igreja de origem, permitindo um atendimento automático e personalizado.

---

## 📲 Funcionamento do QRCode

-   QR Code é projetado durante o culto ou fixado no ambiente físico (acrílicos nos bancos, murais).
-   Ao escanear, o formulário já vem com o ID da igreja (`co_igreja`) associado.
-   O formulário pode ser preenchido conforme a necessidade do membro e enviado.
-   A resposta gera uma **interação** que entra na fila da igreja.
-   Um **gestor ou pastor** é responsável por distribuir ações aos **departamentais**.

---

## 🧾 Categorias do Formulário

Cada formulário pode conter dados de diferentes categorias. Veja os principais campos [documentados no arquivo fonte original].

---

## 🔄 Fluxo de Atendimento

1. Usuário envia o formulário com dados.
2. Gera-se uma **interação** vinculada à igreja.
3. Vai para a **fila de atendimento**.
4. O gestor encaminha para um **responsável** (departamento ou pastor).
5. Cada responsável pode adicionar **ações** no histórico.

---

## 🧪 API REST – Endpoints

Documentação completa disponível no corpo do projeto `backend`, com endpoints para:

### 🔑 Autenticação

-   `POST /api/login`

### 📋 Formulários

-   `POST /api/formulario` – Criar nova interação
-   `GET /api/formulario/{co_interacao}` – Ver detalhes

### 👤 Usuário

-   `GET /api/usuario/interacoes`

### 🛠️ Administrador

-   `GET /api/admin/interacoes/{co_igreja}`
-   `PATCH /api/admin/interacoes/{co_interacao}`

---

## 🧩 Relacionamentos e Estrutura

-   Igreja possui múltiplas interações
-   Interações têm um único usuário (solicitante)
-   Cada interação pode conter múltiplos formulários
-   Formulários contêm detalhes
-   Cada interação gera uma fila de atendimento com ações e responsáveis

---

## 📎 Observações

-   Campos como `email` e `telefone` são vinculados (bind) entre categorias.
-   Todos os acessos requerem autenticação via JWT (Bearer Token).
-   Dados são retornados no modelo pronto para o frontend.
-   Consulta de endereço via API: `https://viacep.com.br/ws/{cep}/json`

---

Este arquivo é parte da documentação do frontend para o sistema InterASD.
