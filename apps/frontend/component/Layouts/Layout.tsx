import { Footer } from "./Footer";
import { Header } from "./Header";
import { AppShell, createStyles } from "@mantine/core";
import { BACKGROUND_COLOR } from "../../utils/constants";
import React from "react";

export function Layout({ children }) {
  const { classes } = useStyles();

  return (
    <AppShell
      className={classes.container}
      padding={0}
      header={<Header />}
      footer={<Footer />}
    >
      <div className={classes.main}>{children}</div>
    </AppShell>
  );
}

const useStyles = createStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100%",
    backgroundColor: BACKGROUND_COLOR
  },
  main: { flexGrow: 1 },
}));
