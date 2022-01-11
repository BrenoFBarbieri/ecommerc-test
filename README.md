This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

--------------------------------------------------------------------------------
## Enunciado

Desenvolver um loja simples em React (pode ser Next.js) ou React Native utilizando **Typescript**, com um catálogo de produtos e um carrinho de compras. O usuário deve poder adicionar/remover produtos do catálogo no carrinho de compras.

## Especificações

### Tela de produtos 🎁

Será responsável por apresentar todos os produtos disponíveis para o usuário em uma lista. Será necessário que você estabeleça comunicação com o back-end, para obter informações relativas a cada uma dos produtos.

<aside>
🛰️ Requisição HTTP para pegar a lista de produtos:
GET [https://5d6da1df777f670014036125.mockapi.io/api/v1/product](https://5d6da1df777f670014036125.mockapi.io/api/v1/product)

</aside>

### Tela do carrinho de compras 🛒

Responsável por guardar os itens e quantidades adicionadas pelo usuário. É desejável que o usuário possa aumentar ou diminuir a quantidade de um produto do carrinho, além de remover por completo.

### Testes automatizados ✅

- Criação de suite de testes automatizados para o repositório.

## Sobre a entrega

1. **Estimativa de tempo para entrega**: O primeiro ponto de entrega deste projeto é o próprio tempo de estimativa para a entrega final do projeto.
2. **Cópia do repositório**: O repositório será entregue para avaliação da estrutura do projeto. Por isso, quaisquer pontos de documentação/comentários em código são bem vindos.
    
    <aside>
    🚧 Não esquecer de organizar bem o progresso do desenvolvimento por commits. Isso será importante para avaliarmos a organização e também o uso da ferramenta.
    
    </aside>
    
    <aside>
    ⛔ Lembrando que o projeto tem como objetivo avaliar a **sua** capacidade técnica atual. Desta forma, é importante que você realize a implementação do projeto por conta própria, sem o uso de templates prontos da internet.
    
    </aside>
    

**Boa sorte! 🍀**