# Dominion Documentation

Official documentation website for Dominion - the coordination layer for autonomous agent swarms on Base.

## Development

### Prerequisites

- Node.js 20+
- pnpm

### Setup

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
pnpm build
```

### Lint

```bash
pnpm lint
```

## Structure

```
dominion-docs/
├── pages/              # MDX documentation pages
│   ├── index.mdx       # Homepage
│   ├── introduction/   # Introduction section
│   ├── concepts/       # Core concepts
│   ├── architecture/   # Technical architecture
│   ├── products/       # Product documentation
│   ├── developers/     # Developer docs
│   ├── prediction-markets/  # Market docs
│   ├── security/       # Security docs
│   ├── faq/           # FAQ
│   └── glossary/      # Terminology
├── public/            # Static assets
├── components/        # React components
├── styles/            # Global styles
└── theme.config.tsx   # Nextra theme config
```

## Tech Stack

- **Framework:** Next.js 14
- **Docs Engine:** Nextra 2
- **Styling:** Tailwind CSS
- **Search:** Built-in Nextra search

## Deployment

### Vercel (Recommended)

1. Connect repo to Vercel
2. Deploy automatically on push

### Static Export

```bash
pnpm build
# Output in ./out/
```

### GitHub Pages

Workflow included in `.github/workflows/deploy.yml`.

## Content Sync

This repo can sync content from [dominion-gitbook](https://github.com/DominionLayer/dominion-gitbook):

```bash
pnpm sync
```

## Contributing

1. Fork the repo
2. Create feature branch
3. Make changes
4. Submit PR

## License

MIT


