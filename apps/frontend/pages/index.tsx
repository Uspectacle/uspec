import { createStyles } from '@mantine/core'
import { NextPage } from 'next'
import { Layout } from '../component/Layouts/Layout'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { GREEN_WHITE, PURPLE_INTENSE, WHITE } from '../utils/constants'
import Link from 'next/link'
import { MyImage } from '../component/Utils/MyImage'

const posts = []

const Home: NextPage = () => {
  const { classes } = useStyles()
  const { t } = useTranslation()

  return (
    <Layout summary={undefined}>
      <ul className={classes.list}>
        <li>
          <Link
            href={'https://www.ensea.fr/en'}
            target={'_blank'}
            rel={'noreferrer'}
            className={classes.item}
            passHref
          >
            <MyImage alt="ensea" src="/image/ensea.png" width={'5em'} />
            <div className={classes.infos}>
              <div className={classes.years}>2018 - 2022</div>
              <div className={classes.name}>{t('resume.ensea.name')}</div>
              <div className={classes.subname}>{t('resume.ensea.subName')}</div>
              <div className={classes.city}>{t('resume.ensea.city')}</div>
            </div>
          </Link>
          <div className={classes.text}>
            {t('resume.ensea.text')}
            <br />
            <strong>{t('resume.result')}</strong>
            {t('resume.ensea.result')}
          </div>
        </li>
        <li>
          <Link
            href={'http://prepa.civfrance.com/prépas-scientifiques/'}
            target={'_blank'}
            rel={'noreferrer'}
            className={classes.item}
            passHref
          >
            <MyImage alt="civ" src="/image/civ.png" width={'5em'} />
            <div className={classes.infos}>
              <div className={classes.years}>2016 - 2018</div>
              <div className={classes.name}>{t('resume.civ.name')}</div>
              <div className={classes.subname}>{t('resume.civ.subName')}</div>
              <div className={classes.city}>{t('resume.civ.city')}</div>
            </div>
          </Link>
          <div className={classes.text}>
            {t('resume.civ.text')}
            <br />
            <strong>{t('resume.result')}</strong>
            {t('resume.civ.result')}
          </div>
        </li>
        <li>
          <Link
            href={'https://www.leparcimperial.fr/lycee/'}
            target={'_blank'}
            rel={'noreferrer'}
            className={classes.item}
            passHref
          >
            <MyImage alt="parc" src="/image/parc.png" width={'5em'} />
            <div className={classes.infos}>
              <div className={classes.years}>2013 - 2016</div>
              <div className={classes.name}>{t('resume.parc.name')}</div>
              <div className={classes.subname}>{t('resume.parc.subName')}</div>
              <div className={classes.city}>{t('resume.parc.city')}</div>
            </div>
          </Link>

          <div className={classes.text}>
            <strong>{t('resume.result')}</strong>
            {t('resume.parc.result')}
          </div>
        </li>
      </ul>
    </Layout>
  )
}

const useStyles = createStyles(() => ({
  list: {
    listStyleType: 'none',
    '& > li': {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: WHITE,
      borderRadius: 10,
      margin: 10
    }
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    paddingTop: 10,
    width: '100%'
  },
  infos: {
    marginLeft: 20,
    color: 'black'
  },
  years: {},
  name: {
    fontWeight: 'bold',
    color: PURPLE_INTENSE
  },
  subname: {},
  city: {},
  text: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: GREEN_WHITE,
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
    fontSize: '0.9em'
  }
}))

export default Home
