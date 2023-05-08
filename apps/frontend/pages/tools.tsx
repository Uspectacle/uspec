import { createStyles } from '@mantine/core'
import { NextPage } from 'next'
import { Layout } from '../component/Layouts/Layout'
import React from 'react'

const Tools: NextPage = () => {
  const { classes } = useStyles()

  return <Layout></Layout>
}

const useStyles = createStyles((theme) => ({}))

export default Tools
