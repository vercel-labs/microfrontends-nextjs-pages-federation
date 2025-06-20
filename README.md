<picture>
  <source srcset="https://assets.vercel.com/image/upload/v1689795055/docs-assets/static/docs/microfrontends/mfe-banner-dark.png" media="(prefers-color-scheme: dark)">
  <source srcset="https://assets.vercel.com/image/upload/v1689795055/docs-assets/static/docs/microfrontends/mfe-banner-light.png" media="(prefers-color-scheme: light)">
  <img src="https://assets.vercel.com/image/upload/v1689795055/docs-assets/static/docs/microfrontends/mfe-banner-light.png" alt="hero banner">
</picture>

# @vercel/microfrontends Module Federation example with Next.js Pages Router

This example demonstrates how to use [@vercel/microfrontends](https://vercel.com/docs/microfrontends) with [Module Federation](https://module-federation.io) and [Next.js Pages Router](https://nextjs.org/docs/app/building-your-application/routing) for building a microfrontend application. It showcases how to create a federated architecture using the `@vercel/microfrontends` package, allowing you to load federated remotes into your application.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/vercel-labs/microfrontends-nextjs-pages-module-federation.git
   ```

2. Navigate to the project directory:

   ```bash
   cd microfrontends-nextjs-pages-module-federation
   ```

3. Install the dependencies:

   ```bash
   pnpm install
   ```

4. Start the development server:

   ```bash
   npm dev
   ```

5. Open your browser and navigate to `http://localhost:3024` to see the microfrontend application in action.

📚 [Documentation](https://vercel.com/docs/microfrontends)
