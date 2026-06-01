import { Head, Html, Main, NextScript } from 'next/document';
import { BACKGROUND_COLOR } from '../src/Utils/DefaultStyle';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="favicon.ico" />
      </Head>
      <body style={{ backgroundColor: BACKGROUND_COLOR }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
