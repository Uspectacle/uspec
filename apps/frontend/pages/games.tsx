// import { createStyles } from '@mantine/core'
import { NextPage } from 'next'
import { Layout } from '../component/Layouts/Layout'
import React from 'react'
import { useTranslation } from 'react-i18next'

const Games: NextPage = () => {
  // const { classes } = useStyles()
  const { t } = useTranslation()

  return (
    <Layout>
      <>🛠️ {t('coming-soon')} 🛠️</>
    </Layout>
  )
}

// const useStyles = createStyles((theme) => ({}))

export default Games
