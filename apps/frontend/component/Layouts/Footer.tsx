import { createStyles, Image } from "@mantine/core";
import { GREEN_LIGHT, PURPLE_INTENSE } from "../../utils/constants";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { classes } = useStyles();
  const { t } = useTranslation();

  const links = [
    { href: "/resume", label: t("footer.resume"), newTab: false },
    {
      href: "https://github.com/Uspectacle",
      label: "/Uspectacle",
      newTab: true,
    },
    {
      href: "mailto:uspectacle@gmail.com",
      label: "uspectacle@gmail.com",
      newTab: true,
    },
  ];

  return (
    <footer className={classes.footer}>
      {t("footer.contact-me")}
      <Link 
        href={"https://github.com/Uspectacle"}
        target={"_blank"}
        rel={"noreferrer"}
        className={classes.link}
        passHref
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image alt="Github" src="/svg/github.svg" width={"1.2em"}/>
          /Uspectacle
        </div>
      </Link>
    </footer>
  );
}

const useStyles = createStyles((theme) => ({
  footer: {
    position: "relative",
    left: 0,
    bottom: 0,
    width: "100%",
    background: PURPLE_INTENSE,
    flexShrink: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 22,
    color: GREEN_LIGHT,
  },
  link: {
    display: "flex",
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    textDecoration: "none",
    color: "white",
    fontSize: 15,
    fontWeight: 500,
  },
}));
