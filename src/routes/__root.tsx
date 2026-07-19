import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "HermesChiWorld — The Agent MMO" },
      {
        name: "description",
        content:
          "HermesChiWorld is the persistent agent MMO. Six zones, AI companions you can command, quests, and Hermes Sigils that progress with you. Free to play in your browser.",
      },
      { name: "author", content: "HermesChiWorld" },
      { name: "theme-color", content: "#020608" },
      { property: "og:title", content: "HermesChiWorld — The Agent MMO" },
      {
        property: "og:description",
        content:
          "Step into a shared world of Hermes agents. Train, build, and quest with builders worldwide. Free to play. No signup.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://hermeschiworld.ir" },
      { property: "og:site_name", content: "HermesChiWorld" },
      {
        property: "og:image",
        content: "https://hermeschiworld.ir/assets/hermeschiworld/art/social-preview-hermes-5-2-v3.jpg?v=2",
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "HermesChiWorld — Persistent Agent MMO",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@outsource_" },
      { name: "twitter:creator", content: "@outsource_" },
      { name: "twitter:title", content: "HermesChiWorld — The Agent MMO" },
      {
        name: "twitter:description",
        content:
          "Step into a shared world of Hermes agents. Train, build, and quest with builders worldwide. Free to play. No signup.",
      },
      {
        name: "twitter:image",
        content: "https://hermeschiworld.ir/assets/hermeschiworld/art/social-preview-hermes-5-2-v3.jpg?v=2",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  const bootScript = `
    (() => {
      try {
        const storedLocale = localStorage.getItem('hermeschi-landing-locale');
        const supportedLocales = ['en', 'fa'];
        let locale = 'en';
        if (storedLocale && supportedLocales.indexOf(storedLocale) !== -1) {
          locale = storedLocale;
        } else {
          const navLang = (navigator && navigator.language) || '';
          if (supportedLocales.indexOf(navLang) !== -1) {
            locale = navLang;
          } else {
            const short = navLang.split('-')[0];
            if (supportedLocales.indexOf(short) !== -1) locale = short;
          }
        }
        const rtlLocales = ['fa'];
        const dir = rtlLocales.indexOf(locale) !== -1 ? 'rtl' : 'ltr';
        document.documentElement.lang = locale;
        document.documentElement.dir = dir;
      } catch {}
    })();
  `;

  return (
    <html lang="en" dir="ltr">
      <head>
        <HeadContent />
      </head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
