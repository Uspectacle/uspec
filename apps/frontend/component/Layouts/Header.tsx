import { createStyles, Image } from "@mantine/core";
import { GREEN_LIGHT, PURPLE_INTENSE } from "../../utils/constants";
import Link from "next/link";
import { useRouter } from 'next/router'
import React from "react";
import i18n from "../../lang/i18n";
import { useTranslation } from "react-i18next";


export function Header() {
  const { classes } = useStyles();
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <div className={classes.header}>
      <Link href={"/"}>
        <Image alt="logo" src="/logo.png" width={160} className={classes.logo}/>
      </Link>
      <Link href={"/"} passHref>
        <div
          className={classes.link}
          style={"/" === router.pathname ? { color: GREEN_LIGHT } : {}}
        >
          {t("header.blog")}
        </div>
      </Link>
      <Link href={"/games"} passHref>
        <div
          className={classes.link}
          style={"/games" === router.pathname ? { color: GREEN_LIGHT } : {}}
        >
          {t("header.games")}
        </div>
      </Link>
      <Link href={"/tools"} passHref>
        <div
          className={classes.link}
          style={"/tools" === router.pathname ? { color: GREEN_LIGHT } : {}}
        >
          {t("header.tools")}
        </div>
      </Link>
      <div
          key={"lang"}
          className={classes.lang}
          onClick={() => i18n.changeLanguage("fr")}
        >
          <Image alt="lang-fr" src="/svg/flag-fr.svg" width={"2em"}/>
      </div>
      <div
          key={"lang"}
          className={classes.lang}
          onClick={() => i18n.changeLanguage("en")}
        >
          <Image alt="lang-en" src="/svg/flag-gb.svg" width={"2em"}/>
      </div>
    </div>
  );
}

const useStyles = createStyles((theme) => ({
  header: {
    background: PURPLE_INTENSE,
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexShrink: 0,
    borderBottom: "unset",
    marginTop: 60,
    marginBottom: 30,
    flexDirection: "row",
    width: "100%",
    height: 55,
  },
  link: {
    display: "block",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    textDecoration: "none",
    color: "white",
    fontSize: 15,
    fontWeight: 500,
  },
  lang: {
    display: "block",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    textDecoration: "none",
    color: "white",
    fontSize: 15,
    fontWeight: 500,
  },
  logo: {
    padding: 35,
    paddingTop: 0
  },
}));
