import { createStyles, Image } from '@mantine/core'
import { GREEN_LIGHT, PURPLE_INTENSE } from '../../utils/constants'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import i18n from '../../lang/i18n'
import { useTranslation } from 'react-i18next'

export function Header() {
  const { classes } = useStyles()
  const router = useRouter()
  const { t } = useTranslation()
  const otherLanguage = i18n.language === 'en' ? 'fr' : 'en'

  return (
    <div className={classes.header}>
      <Link href={'/'} className={classes.logo}>
        <Image alt="logo" src="/logo.png" width={160} />
      </Link>
      <div className={classes.links}>
        <Link href={'/'} className={classes.link} passHref>
          <div style={'/' === router.pathname ? { color: GREEN_LIGHT } : {}}>
            {t('header.blog')}
          </div>
        </Link>
        <Link href={'/games'} className={classes.link} passHref>
          <div
            style={'/games' === router.pathname ? { color: GREEN_LIGHT } : {}}
          >
            {t('header.games')}
          </div>
        </Link>
        <Link href={'/tools'} className={classes.link} passHref>
          <div
            style={'/tools' === router.pathname ? { color: GREEN_LIGHT } : {}}
          >
            {t('header.tools')}
          </div>
        </Link>
        <div
          key={'lang'}
          className={classes.lang}
          onClick={() => i18n.changeLanguage(otherLanguage)}
        >
          {t('header.switchTo')}
          <Image
            alt={`lang-${otherLanguage}`}
            src={`/svg/flag-${otherLanguage}.svg`}
            width={'2em'}
          />
        </div>
      </div>
    </div>
  )
}

const useStyles = createStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    gap: 20,
    [theme.fn.smallerThan('xs')]: {
      alignSelf: 'center'
    }
  },
  links: {
    background: PURPLE_INTENSE,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 10,
    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
      width: 160,
      padding: 10
    }
  },
  link: {
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    padding: 10,
    textDecoration: 'none',
    color: 'white',
    fontSize: 15,
    height: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 500,
    borderRadius: 10,
    [theme.fn.smallerThan('xs')]: {
      width: '90%',
      padding: 5
    }
  },
  lang: {
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    padding: 10,
    height: '2em',
    textDecoration: 'none',
    color: 'white',
    fontSize: 15,
    fontWeight: 500,
    cursor: 'pointer',
    borderRadius: 10,
    [theme.fn.smallerThan('xs')]: {
      width: '90%',
      padding: 5
    }
  },
  logo: {
    padding: 10,
    textDecoration: 'none',
    color: 'white',
    fontSize: 15,
    display: 'flex',
    alignItems: 'center',
    fontWeight: 500
  }
}))
