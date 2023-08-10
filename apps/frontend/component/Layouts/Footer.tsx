import { createStyles } from '@mantine/core'
import { GREEN_LIGHT, PURPLE_INTENSE, WHITE } from '../../utils/constants'
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { MyImage } from '../Utils/MyImage'

export function Footer() {
  const { classes } = useStyles()
  const { t } = useTranslation()

  return (
    <footer className={classes.footer}>
      <strong>{t('footer.contactMe')}</strong>
      <div className={classes.links}>
        <Link href={'/resume'} className={classes.link}>
          {t('footer.resume')}
        </Link>
        <Link
          href={'mailto:uspectacle@gmail.com'}
          target={'_blank'}
          rel={'noreferrer'}
          className={classes.link}
          passHref
        >
          uspectacle@gmail.com
        </Link>
        <Link
          href={'https://github.com/Uspectacle'}
          target={'_blank'}
          rel={'noreferrer'}
          className={classes.link}
          passHref
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <MyImage
              alt="Github"
              src="/svg/github.svg"
              width={24}
              height={24}
              blurhash={'U00000fQfQfQfQfQfQfQfQfQfQfQfQfQfQfQ'}
              style={{ width: '1.2em', height: '1.2em' }}
            />
            /Uspectacle
          </div>
        </Link>
      </div>
    </footer>
  )
}

const useStyles = createStyles((theme) => ({
  footer: {
    position: 'relative',
    left: 0,
    bottom: 0,
    width: '100%',
    background: PURPLE_INTENSE,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    color: GREEN_LIGHT
  },
  links: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 10,
    [theme.fn.smallerThan(600)]: {
      flexDirection: 'column',
      width: 200,
      padding: 10
    }
  },
  link: {
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    padding: 10,
    textDecoration: 'none',
    fontSize: 15,
    height: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 500,
    borderRadius: 10,
    color: WHITE,
    transition: 'color 0.3s',
    '&:hover': {
      color: GREEN_LIGHT
    },
    [theme.fn.smallerThan(600)]: {
      width: '90%',
      padding: 5
    }
  }
}))
