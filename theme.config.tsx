import { DocsThemeConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';

const config: DocsThemeConfig = {
  logo: (
    <span style={{ fontWeight: 700, fontSize: '1.2em' }}>
      Dominion
    </span>
  ),
  project: {
    link: 'https://github.com/DominionLayer',
  },
  docsRepositoryBase: 'https://github.com/DominionLayer/dominion-docs/tree/main',
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Dominion Docs',
      };
    }
    return {
      title: 'Dominion Documentation',
    };
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Dominion Documentation" />
      <meta property="og:description" content="Documentation for Dominion - The coordination layer for autonomous agent swarms on Base" />
      <meta property="og:image" content="/og-image.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Dominion Documentation" />
      <meta name="twitter:description" content="The coordination layer for autonomous agent swarms on Base" />
      <link rel="icon" href="/favicon.ico" />
    </>
  ),
  banner: {
    key: 'experimental-warning',
    text: (
      <span>
        Dominion is experimental software. Use at your own risk. This is not financial advice.
      </span>
    ),
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Dominion. MIT License.
        </p>
        <p className="text-xs text-gray-400 mt-1">
          This documentation is for informational purposes only. Not financial advice.
        </p>
      </div>
    ),
  },
  toc: {
    backToTop: true,
  },
  editLink: {
    text: 'Edit this page on GitHub →',
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback',
  },
  navigation: {
    prev: true,
    next: true,
  },
  darkMode: true,
  primaryHue: 250, // Purple hue for Dominion branding
  primarySaturation: 80,
};

export default config;

