// import { createStyles } from '@mantine/core'
import { NextPage } from 'next'
import { Layout } from '../src/Layouts/Layout'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { MyImage } from '../src/Utils/MyImage'
import { createStyles } from '@mantine/core'
import { PURPLE_INTENSE, WHITE } from '../utils/constants'

const Page404: NextPage = () => {
  const { t } = useTranslation()
  const { classes } = useStyles()

  const router = useRouter()

  return (
    <Layout>
      <div className={classes.container}>
        <MyImage
          alt="logo"
          src="/image/404.png"
          width={125}
          height={111}
          blurhash={'UFA29=S[4AqUt2R6o|yo8wi%z$XxQ;V[VveC'}
          priority
          style={{ width: 125 }}
        />
        <div>
          <br />
          <strong>{router.asPath}</strong>
          <br />
          <br />
          {t('404.text')}
        </div>
      </div>
    </Layout>
  )
}

const useStyles = createStyles(() => ({
  container: {
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'column',
    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    padding: 20,
    backgroundColor: WHITE,
    borderRadius: 10,
    overflow: 'hidden',
    strong: { color: PURPLE_INTENSE }
  }
}))

export default Page404
