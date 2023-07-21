import { createStyles } from '@mantine/core'
import { NextPage } from 'next'
import { Layout } from '../component/Layouts/Layout'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { GREEN_WHITE, PURPLE_INTENSE, WHITE } from '../utils/constants'
import { useTranslation } from 'react-i18next'
import { MyImage } from '../component/Utils/MyImage'
import { RotatingWords } from '../component/Utils/RotatingWords'

const Resume: NextPage = () => {
  const { classes } = useStyles()
  const { t } = useTranslation()

  const summary = (
    <>
      {t('resume.summary')} <br /> <br />
      <Link
        download={'LARSEN_Mario_resume_EN_2023.pdf'}
        href={'doc/LARSEN_Mario_resume_EN_2023.pdf'}
        target={'_blank'}
        rel={'noreferrer'}
        className={classes.button}
        passHref
      >
        <MyImage alt="pdf" src="/svg/pdf.svg" width={'1.2em'} />
        &nbsp;{t('resume.downloadAsPDF')}
      </Link>
    </>
  )

  const Education = () => (
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
  )

  const Experience = () => (
    <ul className={classes.list}>
      <li>
        <Link
          href={'https://galadrim.fr/'}
          target={'_blank'}
          rel={'noreferrer'}
          className={classes.item}
          passHref
        >
          <MyImage alt="galadrim" src="/image/galadrim.jfif" width={'5em'} />
          <div className={classes.infos}>
            <div className={classes.years}>2022 - 2023</div>
            <div className={classes.name}>{t('resume.galadrim.name')}</div>
            <div className={classes.subname}>
              {t('resume.galadrim.subName')}
            </div>
            <div className={classes.city}>{t('resume.galadrim.city')}</div>
          </div>
        </Link>
        <div className={classes.text}>
          <strong>{t('resume.activity')}</strong>
          {t('resume.galadrim.activity')}
          <br />
          <strong>{t('resume.result')}</strong>
          {t('resume.galadrim.result')}
        </div>
      </li>
      <li>
        <Link
          href={'https://list.cea.fr/fr'}
          target={'_blank'}
          rel={'noreferrer'}
          className={classes.item}
          passHref
        >
          <MyImage alt="cea" src="/image/cea.jpg" width={'5em'} />
          <div className={classes.infos}>
            <div className={classes.years}>2021</div>
            <div className={classes.name}>{t('resume.cea.name')}</div>
            <div className={classes.subname}>{t('resume.cea.subName')}</div>
            <div className={classes.city}>{t('resume.cea.city')}</div>
          </div>
        </Link>
        <div className={classes.text}>
          <strong>{t('resume.objective')}</strong>
          {t('resume.cea.objective')}
          <br />
          <strong>{t('resume.result')}</strong>
          {t('resume.cea.result')}
        </div>
      </li>
      <li>
        <Link
          href={'https://www.uni-lj.si/eng/'}
          target={'_blank'}
          rel={'noreferrer'}
          className={classes.item}
          passHref
        >
          <MyImage
            alt="Uni-ljubljana"
            src="/image/Uni-ljubljana.png"
            width={'5em'}
          />
          <div className={classes.infos}>
            <div className={classes.years}>2020</div>
            <div className={classes.name}>{t('resume.ljubljana.name')}</div>
            <div className={classes.subname}>
              {t('resume.ljubljana.subName')}
            </div>
            <div className={classes.city}>{t('resume.ljubljana.city')}</div>
          </div>
        </Link>
        <div className={classes.text}>
          <strong>{t('resume.objective')}</strong>
          {t('resume.ljubljana.objective')}
          <br />
          <strong>{t('resume.result')}</strong>
          {t('resume.ljubljana.result')}
        </div>
      </li>
      <li>
        <Link
          href={'http://www-reynal.ensea.fr/?page_id=303'}
          target={'_blank'}
          rel={'noreferrer'}
          className={classes.item}
          passHref
        >
          <MyImage alt="ensea" src="/image/ensea.png" width={'5em'} />
          <div className={classes.infos}>
            <div className={classes.years}>2019 - 2020</div>
            <div className={classes.name}>{t('resume.themis.name')}</div>
            <div className={classes.subname}>{t('resume.themis.subName')}</div>
            <div className={classes.city}>{t('resume.themis.city')}</div>
          </div>
        </Link>
        <div className={classes.text}>
          {t('resume.themis.text')}
          <br />
          <strong>{t('resume.objective')}</strong>
          {t('resume.themis.objective')}
          <br />
          <strong>{t('resume.result')}</strong>
          {t('resume.themis.result')}
        </div>
      </li>
    </ul>
  )

  const ForeignLanguages = () => (
    <ul className={classes.gridLang}>
      <li>
        {t('resume.french.name')}
        <MyImage alt={`lang-fr`} src={`svg/flag-fr.svg`} width={'3em'} />
        ★★★★★
        <br />
        {t('resume.french.level')}
      </li>
      <li>
        {t('resume.english.name')}
        <MyImage alt={`lang-en`} src={`svg/flag-en.svg`} width={'3em'} />
        ★★★★★
        <br />
        {t('resume.english.level')}
        <br />
        <div className={classes.bonusInfo}>{t('resume.english.bonus')}</div>
      </li>
      <li>
        {t('resume.spanish.name')}
        <MyImage alt={`lang-es`} src={`svg/flag-es.svg`} width={'3em'} />
        ★★★☆☆
        <br />
        {t('resume.spanish.level')}
      </li>
    </ul>
  )

  const Skills = () => (
    <RotatingWords text={t('resume.skill.i-am-good-at')} words={skills} />
  )
  const skillsList = [
    t('resume.skill.deep-learning'),
    t('resume.skill.machine-learning'),
    t('resume.skill.chip-design'),
    t('resume.skill.board-design'),
    t('resume.skill.schematic-design'),
    t('resume.skill.image-processing'),
    t('resume.skill.audio-processing'),
    t('resume.skill.signal-processing'),
    t('resume.skill.video-processing'),
    t('resume.skill.telecommunication'),
    t('resume.skill.modeling-languages'),
    t('resume.skill.optimization'),
    t('resume.skill.noise-reduction'),
    t('resume.skill.database-handling'),
    t('resume.skill.git-handling'),
    t('resume.skill.web-development'),
    t('resume.skill.mobile-development'),
    t('resume.skill.agile-methods'),
    t('resume.skill.managing-a-team'),
    t('resume.skill.managing-a-project'),
    t('resume.skill.app-deployment')
  ]
  const [skills, setSkills] = useState(skillsList)

  useEffect(() => {
    setSkills(skillsList.sort(() => Math.random() - 0.5))
  }, [])

  const ProgrammingLanguages = () => (
    <ul className={classes.grid}>
      <li>
        <div className={classes.logo}>
          <MyImage alt="Python" src="/image/python.png" width={'3em'} />
        </div>
        {t('resume.skill.python')}
      </li>
      <li>
        <div className={classes.logo}>
          <MyImage alt="Matlab" src="/image/matlab.png" width={'3em'} />
        </div>
        {t('resume.skill.matlab')}
      </li>
      <li>
        <div className={classes.logo}>
          <MyImage alt="Java" src="/image/java.png" width={'3em'} />
        </div>
        {t('resume.skill.java')}
      </li>
      <li>
        <div className={classes.logo}>
          <MyImage alt="JavaScript" src="/image/js.png" width={'3em'} />
        </div>
        JavaScript
      </li>
      <li>
        <div className={classes.logo}>
          <MyImage alt="HTML" src="/image/html.png" width={'3em'} />
        </div>
        HTML
      </li>
      <li>
        <div className={classes.logo}>
          <MyImage alt="CSS" src="/image/css.png" width={'3em'} />
        </div>
        CSS
      </li>
      <li>
        <div className={classes.logo}>
          <MyImage alt="C" src="/image/c.png" width={'3em'} />
        </div>
        C
      </li>
      <li>
        <div className={classes.logo}>
          <MyImage alt="C#" src="/image/csharp.png" width={'3em'} />
        </div>
        C#
      </li>
      <li>
        <div className={classes.logo}>
          <MyImage alt="VHDL" src="/image/vhdl.png" width={'3em'} />
        </div>
        VHDL
      </li>
      <li>
        <div className={classes.logo}>
          <MyImage alt="Bash" src="/image/bash.png" width={'3em'} />
        </div>
        {t('resume.skill.bash-unix')}
      </li>
      <li>
        <div className={classes.logo}>
          <MyImage
            alt="Mathematica"
            src="/image/mathematica.png"
            width={'3em'}
          />
        </div>
        {t('resume.skill.mathematica')}
      </li>
      <li>
        <div className={classes.logo}>
          <MyImage alt="Assembly" src="/image/assembly.png" width={'3em'} />
        </div>
        {t('resume.skill.assembly')}
      </li>
      <li>
        <div className={classes.logo}>
          <MyImage alt="React" src="/image/react.png" width={'3em'} />
        </div>
        {t('resume.skill.react')}
      </li>
      <li>
        <div className={classes.logo}>
          <MyImage
            alt="React Native"
            src="/image/reactnative.png"
            width={'3em'}
          />
        </div>
        {t('resume.skill.react-native')}
      </li>
      <li>
        <div className={classes.logo}>
          <MyImage alt="AWS console" src="/image/aws.png" width={'3em'} />
        </div>
        {t('resume.skill.aws-console')}
      </li>
      <li>
        <div className={classes.logo}>
          <MyImage alt="TypeScript" src="/image/ts.png" width={'3em'} />
        </div>
        TypeScript
      </li>
      <li>
        <div className={classes.logo}>
          <MyImage alt="SQL" src="/image/sql.png" width={'3em'} />
        </div>
        SQL
      </li>
      <li>
        <div className={classes.logo}>
          <MyImage alt="Docker" src="/image/docker.png" width={'3em'} />
        </div>
        {t('resume.skill.docker')}
      </li>
      <li>
        <div className={classes.logo}>
          <MyImage alt="Excel" src="/image/excel.png" width={'3em'} />
        </div>
        {t('resume.skill.excel')}
      </li>
    </ul>
  )

  const intrestsList = [
    t('resume.intrestsList.courses'),
    t('resume.intrestsList.implementation'),
    t('resume.intrestsList.development'),
    t('resume.intrestsList.psl'),
    t('resume.intrestsList.film'),
    t('resume.intrestsList.delegate'),
    t('resume.intrestsList.running'),
    t('resume.intrestsList.association')
  ]

  const [randomIntrest, setRandomIntrest] = useState(intrestsList[0])
  const [intrestSeen, setIntrestSeen] = useState(false)
  const intrestRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!intrestRef.current) return
      if (
        window.scrollY + window.innerHeight <
        intrestRef.current.offsetTop + 10
      ) {
        if (intrestSeen) {
          setIntrestSeen(false)
          setRandomIntrest(
            intrestsList[Math.floor(Math.random() * intrestsList.length)]
          )
        }
      } else if (!intrestSeen) setIntrestSeen(true)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [intrestSeen])

  const Intrests = () => (
    <div className={classes.intrest} ref={intrestRef}>
      <strong>Look at it again</strong> but I love to learn stuffs, do stuffs
      and share stuffs like <span>{randomIntrest}</span>
    </div>
  )

  return (
    <Layout summary={summary}>
      <div className={classes.container}>
        <div className={classes.title}>MARIO LARSEN</div>
        <div className={classes.subTitle}>{t('resume.subTitle')}</div>
        <MyImage
          alt="myself"
          src="/image/selfi.jpg"
          hash={'L*MQq+RPx]%g~qWBWBtRX9WBj[V['}
          aspectRatio={'3941/2556'}
        />
        <div className={classes.listTitle}>{t('resume.education')}</div>
        <Education />
        <div className={classes.listTitle}>{t('resume.experience')}</div>
        <Experience />
        <div className={classes.dualContainer}>
          <div className={classes.columnContainer}>
            <div className={classes.listTitle}>{t('resume.foreign')}</div>
            <ForeignLanguages />
            <div className={classes.listTitle}>{t('resume.skills')}</div>
            <Skills />
          </div>
          <div className={classes.columnContainer}>
            <div className={classes.listTitle}>{t('resume.programming')}</div>
            <ProgrammingLanguages />
          </div>
        </div>
        <div className={classes.listTitle}>{t('resume.intrests')}</div>
        <Intrests />
      </div>
    </Layout>
  )
}

const useStyles = createStyles((theme) => ({
  container: {
    maxWidth: 1000,
    backgroundColor: WHITE,
    borderRadius: 10,
    margin: 10,
    display: 'flex',
    flexDirection: 'column'
  },
  title: {
    textAlign: 'center',
    fontSize: '2em',
    fontWeight: 'bold',
    marginTop: 10,
    color: PURPLE_INTENSE
  },
  subTitle: {
    textAlign: 'center',
    fontSize: '1em',
    fontStyle: 'italic',
    marginTop: 10
  },
  dualContainer: {
    [theme.fn.largerThan(760)]: {
      display: 'flex',
      flexDirection: 'row-reverse'
    }
  },
  columnContainer: {
    [theme.fn.largerThan(760)]: {
      width: '50%'
    }
  },
  listTitle: {
    backgroundColor: PURPLE_INTENSE,
    color: WHITE,
    textAlign: 'center',
    fontSize: '1.5em'
  },
  list: {
    listStyleType: 'none',
    '& > li': {
      display: 'flex',
      flexDirection: 'column'
    }
  },
  grid: {
    listStyleType: 'none',
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'wrap',
    '& > li': {
      display: 'flex',
      textAlign: 'center',
      flexDirection: 'column',
      boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
      width: 100,
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 5,
      borderRadius: 5,
      margin: 5
    }
  },
  gridLang: {
    listStyleType: 'none',
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'wrap',
    '& > li': {
      display: 'flex',
      textAlign: 'center',
      flexDirection: 'column',
      boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
      width: 130,
      alignItems: 'center',
      padding: 5,
      borderRadius: 5,
      margin: 5
    }
  },
  logo: {
    display: 'flex',
    height: '4em',
    justifyContent: 'center',
    alignItems: 'center'
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
  },
  button: {
    alignSelf: 'flex-start',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    padding: 10,
    textDecoration: 'none',
    fontSize: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 500,
    borderRadius: 10,
    backgroundColor: WHITE
  },
  bonusInfo: {
    fontSize: '0.8em',
    fontStyle: 'italic'
  },
  intrest: {
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 30,
    marginRight: 30,
    strong: { color: PURPLE_INTENSE },
    span: { fontWeight: 500 }
  }
}))

export default Resume
