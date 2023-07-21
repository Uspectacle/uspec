import { Footer } from './Footer'
import { Header } from './Header'
import { createStyles } from '@mantine/core'
import { BACKGROUND_COLOR } from '../../utils/constants'
import React from 'react'

export function Layout({ summary, children }) {
  const { classes } = useStyles()

  return (
    <div className={classes.container}>
      <Header>{summary}</Header>
      {children}
      <Footer />
    </div>
  )
}

const useStyles = createStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    minHeight: '100vh',
    justifyContent: 'space-between',
    whiteSpace: 'pre-wrap',
    alignItems: 'center',
    backgroundColor: BACKGROUND_COLOR
  }
}))
