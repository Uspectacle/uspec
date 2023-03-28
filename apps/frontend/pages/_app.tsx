import { MantineProvider } from "@mantine/core";
import "dayjs/locale/fr";
import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles.css";


function CustomApp({ Component, pageProps }: AppProps) {
  if (
    process.env.NEXT_PUBLIC_NODE_ENV === "staging" ||
    process.env.NEXT_PUBLIC_NODE_ENV === "production"
  ) {
    console.log = () => {};
    console.error = () => {};
    console.debug = () => {};
  }

  return (
    <MantineProvider>
      <Head>
        <title>uSPEC</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
        />
      </main>
    </MantineProvider>
  );
}

export default CustomApp;
function useStyles(): { classes: any; } {
  throw new Error("Function not implemented.");
}

