import { Footer } from './Footer'
import { Header } from './Header'
import { createStyles } from '@mantine/core'
import { BACKGROUND_COLOR } from '../../utils/constants'
import React from 'react'

export function Layout({ children }) {
  const { classes } = useStyles()

  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.main}>{children}</div>
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
    alignItems: 'center',
    backgroundColor: BACKGROUND_COLOR
  },
  main: {
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    padding: 10
  }
}))
