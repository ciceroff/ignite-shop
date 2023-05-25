import { globalStyles } from "@/styles/global";
import { Container, Header } from "@/styles/pages/app";
import { AppProps } from "next/app";

globalStyles();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>Ignite Shop</Header>
      <Component {...pageProps} />
    </Container>
  );
}
