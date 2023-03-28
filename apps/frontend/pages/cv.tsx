import { createStyles } from "@mantine/core";
import { NextPage } from "next";
import { Layout } from "../component/Layouts/Layout";
import React from "react";


const CV: NextPage = () => {
  const { classes } = useStyles();

  return (
    <Layout>
    </Layout>
  );
};

const useStyles = createStyles((theme) => ({
}));

export default CV;
