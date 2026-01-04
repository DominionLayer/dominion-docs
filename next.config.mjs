import nextra from 'nextra';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  staticImage: true,
  latex: true,
  flexsearch: {
    codeblocks: true,
  },
  defaultShowCopyCode: true,
});

export default withNextra({
  reactStrictMode: true,
  images: {
    unoptimized: true, // For static export
  },
  // For static export (Vercel handles this automatically)
  // output: 'export',
});

