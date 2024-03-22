import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react"
import { SaasProvider } from "@saas-ui/react";
import { Layout } from "components/layout";
import 'theme/blog.css'
import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  const { announcement, header, footer } = pageProps;

  return (
    <SaasProvider theme={theme}>
      <Analytics />
      <Layout
        announcementProps={announcement}
        headerProps={header}
        footerProps={footer}
      >
        <Component {...pageProps} />
      </Layout>
    </SaasProvider>
  );
}

export default MyApp;
