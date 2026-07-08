import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
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

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold text-foreground">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">Try refreshing the page.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Faasil Ambalathuveettil — ERP Finance Systems & Transformation, Riyadh" },
      {
        name: "description",
        content:
          "Finance Systems & ERP Transformation professional in Riyadh. Multi-entity ERP built from Excel baseline, ZATCA Phase 2 live across 3 entities, 110+ COA, AI-assisted automation. Ex-EY GDS. CertIFRS · ACCA — P Level · SOCPA Eligible.",
      },
      { name: "author", content: "Faasil Ambalathuveettil" },
      { property: "og:title", content: "Faasil Ambalathuveettil — ERP Finance Systems & Transformation, Riyadh" },
      {
        property: "og:description",
        content:
          "Finance Systems & ERP Transformation professional in Riyadh. Multi-entity ERP built from Excel baseline, ZATCA Phase 2 live across 3 entities, 110+ COA, AI-assisted automation. Ex-EY GDS. CertIFRS · ACCA — P Level · SOCPA Eligible.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Faasil Ambalathuveettil" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Faasil Ambalathuveettil — ERP Finance Systems & Transformation, Riyadh" },
      {
        name: "twitter:description",
        content:
          "Finance Systems & ERP Transformation professional in Riyadh. Multi-entity ERP built from Excel baseline, ZATCA Phase 2 live across 3 entities, 110+ COA, AI-assisted automation. Ex-EY GDS. CertIFRS · ACCA — P Level · SOCPA Eligible.",
      },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/41d80a58-eeb0-45c5-bb2c-b2621b7b1ab9/id-preview-997baab7--b87b7661-204a-414e-b4e5-d3e3122cb418.lovable.app-1783503245104.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/41d80a58-eeb0-45c5-bb2c-b2621b7b1ab9/id-preview-997baab7--b87b7661-204a-414e-b4e5-d3e3122cb418.lovable.app-1783503245104.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Faasil Ambalathuveettil",
          jobTitle: "ERP Finance Systems & Transformation Professional",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Riyadh",
            addressCountry: "SA",
          },
          email: "mailto:faazilusman@gmail.com",
          telephone: "+966570244154",
          sameAs: ["https://linkedin.com/in/faasilav"],
          knowsAbout: [
            "ERP Implementation",
            "ZATCA Phase 2 e-Invoicing",
            "Finance Transformation",
            "Multi-Entity Accounting",
            "AI-Assisted Automation",
            "KSA VAT",
            "SOCPA",
            "IFRS",
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
