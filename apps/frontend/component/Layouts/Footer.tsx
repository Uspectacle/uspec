import { createStyles } from "@mantine/core";
import { GREEN_LIGHT, PURPLE_INTENSE } from "../../utils/constants";
import Link from "next/link";
import React from "react";

export function Footer() {
  const { classes } = useStyles();

  const links = [
    { href: "/cv", label: "CV", newTab: false },
    {
      href: "https://github.com/Uspectacle",
      label: "GitHub/Uspectacle",
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
      Contact-me :
      {links.map((link) => (
        <Link href={link.href} key={link.label} passHref>
          <a
            key={link.label}
            href={link.href}
            className={classes.link}
            target={link.newTab ? "_blank" : undefined}
            rel={link.newTab ? "noreferrer" : undefined}
          >
            {link.label}
          </a>
        </Link>
      ))}
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
}));
