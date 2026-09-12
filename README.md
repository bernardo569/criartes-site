# Criartes — Gráfica e Editora

Website institucional da Criartes, com apresentação dos serviços editoriais e gráficos, portfólio de projectos, pacote de impressão, testemunhos de clientes e anúncio do podcast **POD'S Contar a tua história**.

## Executar localmente

Requisitos: Node.js 22 ou superior e pnpm.

```bash
pnpm install
pnpm dev
```

Para validar e gerar a versão de produção:

```bash
pnpm check
pnpm build
pnpm start
```

O projecto é autónomo: as imagens, o PDF do pacote de impressão e os restantes recursos usados pelo site estão incluídos em `client/public/assets`. Não depende do armazenamento privado do WebDev.

## Conteúdo incluído

O site inclui a informação institucional da Criartes, contactos actualizados, localização em Luanda, Angola, botão de WhatsApp para **948 595 707**, e-mail `geral@editoraCriartes.com`, vinte imagens optimizadas de projectos, dois testemunhos, o pacote de impressão em PDF, o anúncio do podcast com a imagem de José Caculo e o modal informativo completo.

## Estrutura principal

- `client/src/pages/Home.tsx` — página institucional e interacções.
- `client/src/index.css` — identidade visual, responsividade e animações.
- `client/public/assets/` — imagens e documentos locais.
- `server/index.ts` — servidor Express para servir a versão de produção.

## Contactos da Criartes

**WhatsApp:** 948 595 707  
**Localização:** Luanda — Angola, Bairro Prenda, Estrada da Samba, junto à passadeira da Sunset  
**E-mail:** geral@editoraCriartes.com
