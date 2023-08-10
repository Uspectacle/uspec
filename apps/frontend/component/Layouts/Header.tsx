import { createStyles } from '@mantine/core'
import { GREEN_LIGHT, GREEN_WHITE, PURPLE_INTENSE } from '../../utils/constants'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import i18n from '../../lang/i18n'
import { useTranslation } from 'react-i18next'
import { MyImage } from '../Utils/MyImage'

export function Header({ children }: { children?: JSX.Element | undefined }) {
  const { classes } = useStyles()
  const router = useRouter()
  const { t } = useTranslation()
  const otherLanguage = i18n.language.slice(0, 2) === 'en' ? 'fr' : 'en'

  return (
    <div className={classes.header}>
      <div className={classes.menu}>
        <Link href={'/'} className={classes.logo}>
          <MyImage
            alt="logo"
            src="/image/logo.png"
            width={201}
            height={154}
            blurhash={'U8BV41GyGyCCI80c#0#I0c+o;EROu2.9TlP0'}
            priority
            style={{ width: 160 }}
          />
        </Link>
        <div className={classes.links}>
          <Link href={'/'} className={classes.link} passHref>
            <div style={'/' === router.pathname ? { color: GREEN_LIGHT } : {}}>
              {t('header.blog')}
            </div>
          </Link>
          {/* <Link href={'/games'} className={classes.link} passHref>
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
          </Link> */}
          <div
            key={`lang-${otherLanguage}`}
            className={classes.lang}
            onClick={() => {
              i18n.changeLanguage(otherLanguage)
              localStorage.setItem('currentLanguage', otherLanguage)
            }}
          >
            {t('header.switchTo')}
            <MyImage
              alt={`lang-${otherLanguage}`}
              src={`svg/flag-${otherLanguage}.svg`}
              width={24}
              height={24}
              blurhash={'U00000fQfQfQfQfQfQfQfQfQfQfQfQfQfQfQ'}
              style={{ width: '2em' }}
            />
          </div>
        </div>
      </div>
      {!!children && <div className={classes.summary}>{children}</div>}
    </div>
  )
}

const useStyles = createStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    width: '90%',
    [theme.fn.smallerThan(950)]: {
      flexDirection: 'column'
    }
  },
  menu: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    [theme.fn.smallerThan(600)]: {
      alignSelf: 'center',
      justifyContent: 'space-around',
      width: '100%'
    }
  },
  links: {
    background: PURPLE_INTENSE,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 10,
    marginLeft: 20,
    // width: 320,
    [theme.fn.smallerThan(600)]: {
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
    [theme.fn.smallerThan(600)]: {
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
    [theme.fn.smallerThan(600)]: {
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
  },
  summary: {
    backgroundColor: GREEN_WHITE,
    borderRadius: 10,
    margin: 10,
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'flex-end',
    width: 300
  }
}))
