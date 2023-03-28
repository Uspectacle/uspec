import {
  createStyles,
  Group,
  Image,
} from "@mantine/core";
import { GREEN_LIGHT, PURPLE_INTENSE } from "../../utils/constants";
import Link from "next/link";
import { useRouter } from 'next/router'
import React from "react";


export function Header() {
  const { classes } = useStyles();
  const router = useRouter();

  const links = [
    { href: "/", label: "Blog", newTab: false },
    { href: "/games", label: "Jeux", newTab: false },
    { href: "/tools", label: "Outils", newTab: false },
  ]

  return (
    <div className={classes.header}>
      <a
        href={links[0].href}
        target={links[0].newTab ? "_blank" : undefined}
        rel={links[0].newTab ? "noreferrer" : undefined}
        className={classes.logo}
      >
        <Image alt="logo" src="/logo.svg"/>
      </a>
      {links.map((link) => (
        <Link href={link.href} key={link.label} passHref>
          <a
            key={link.label}
            href={link.href}
            className={classes.link}
            style={link.href === router.pathname ? { color: GREEN_LIGHT } : {}}
            target={link.newTab ? "_blank" : undefined}
            rel={link.newTab ? "noreferrer" : undefined}
          >
            {link.label}
          </a>
        </Link>
      ))}
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
  logo: {
    width: 103*1.5,
    padding: 35,
    paddingTop: 0
  },
}));
