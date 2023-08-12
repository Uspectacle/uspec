import { createStyles } from '@mantine/core'
import { NextPage } from 'next'
import { Layout } from '../src/Layouts/Layout'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { GREEN_WHITE, PURPLE_INTENSE, SHADOW, WHITE } from '../utils/constants'
import { useTranslation } from 'react-i18next'
import { MyImage } from '../src/Utils/MyImage'
import { RotatingWords } from '../src/Resume/RotatingWords'
import { lookAgain } from '../src/Resume/LookAgain'
import i18n from '../utils/i18n'
import { getWindow } from '../src/Utils/GetWindow'

const Resume: NextPage = () => {
  const { classes } = useStyles()
  const { t } = useTranslation()

  const { innerWidth } = getWindow()

  const summary = (
    <>
      {t('resume.summary')} <br /> <br />
      <Link
        download={t('resume.pdf')}
        href={`doc/${t('resume.pdf')}`}
        target={'_blank'}
        rel={'noreferrer'}
        className={classes.button}
        passHref
      >
        <MyImage
          alt="pdf"
          src="/svg/pdf.svg"
          width={800}
          height={800}
          style={{ width: '1.2em' }}
        />
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
          <MyImage
            alt="ensea"
            src="/image/ensea.png"
            width={120}
            height={119}
            blurhash={'U7O0iyiJ00d=00x]RPRP%goz.moz8wR5tRyD'}
            style={{ width: '5em' }}
          />
          <div className={classes.infos}>
            <div className={classes.years}>2018 - 2022</div>
            <div className={classes.name}>{t('resume.ensea.name')}</div>
            <div className={classes.subName}>{t('resume.ensea.subName')}</div>
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
          <MyImage
            alt="civ"
            src="/image/civ.png"
            width={202}
            height={69}
            blurhash={'UC85Tc4TQ*xuDi.AVqI84T.AktV??^8wtn%i'}
            style={{ width: '5em' }}
          />
          <div className={classes.infos}>
            <div className={classes.years}>2016 - 2018</div>
            <div className={classes.name}>{t('resume.civ.name')}</div>
            <div className={classes.subName}>{t('resume.civ.subName')}</div>
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
          <MyImage
            alt="parc"
            src="/image/parc.png"
            width={475}
            height={106}
            style={{ width: '5em' }}
          />
          <div className={classes.infos}>
            <div className={classes.years}>2013 - 2016</div>
            <div className={classes.name}>{t('resume.parc.name')}</div>
            <div className={classes.subName}>{t('resume.parc.subName')}</div>
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
          <MyImage
            alt="galadrim"
            src="/image/galadrim.jfif"
            width={200}
            height={200}
            style={{ width: '5em' }}
          />
          <div className={classes.infos}>
            <div className={classes.years}>2022 - 2023</div>
            <div className={classes.name}>{t('resume.galadrim.name')}</div>
            <div className={classes.subName}>
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
          <MyImage
            alt="cea"
            src="/image/cea.jpg"
            width={400}
            height={400}
            style={{ width: '5em' }}
          />
          <div className={classes.infos}>
            <div className={classes.years}>2021</div>
            <div className={classes.name}>{t('resume.cea.name')}</div>
            <div className={classes.subName}>{t('resume.cea.subName')}</div>
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
            width={220}
            height={219}
            blurhash={'UNC#V+a|0|jZ3Vjt|_ay;Na|PAjt-pfQR*ay'}
            style={{ width: '5em' }}
          />
          <div className={classes.infos}>
            <div className={classes.years}>2020</div>
            <div className={classes.name}>{t('resume.ljubljana.name')}</div>
            <div className={classes.subName}>
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
          <MyImage
            alt="ensea"
            src="/image/ensea.png"
            width={120}
            height={119}
            blurhash={'U7O0iyiJ00d=00x]RPRP%goz.moz8wR5tRyD'}
            style={{ width: '5em' }}
          />
          <div className={classes.infos}>
            <div className={classes.years}>2019 - 2020</div>
            <div className={classes.name}>{t('resume.themis.name')}</div>
            <div className={classes.subName}>{t('resume.themis.subName')}</div>
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
        <MyImage
          alt="lang-fr"
          src="/svg/flag-fr.svg"
          width={800}
          height={800}
          style={{ width: '5em' }}
        />
        ★★★★★
        <br />
        {t('resume.french.level')}
      </li>
      <li>
        {t('resume.english.name')}
        <MyImage
          alt="lang-en"
          src="/svg/flag-en.svg"
          width={800}
          height={800}
          style={{ width: '5em' }}
        />
        ★★★★★
        <br />
        {t('resume.english.level')}
        <br />
        <div className={classes.bonusInfo}>{t('resume.english.bonus')}</div>
      </li>
      <li>
        {t('resume.spanish.name')}
        <MyImage
          alt="lang-es"
          src="/svg/flag-es.svg"
          width={800}
          height={800}
          style={{ width: '5em' }}
        />
        ★★★☆☆
        <br />
        {t('resume.spanish.level')}
      </li>
    </ul>
  )

  const Skills = () => (
    <RotatingWords text={t('resume.skill.i-am-good-at')} words={skills} />
  )

  const [skills, setSkills] = useState<string[]>([])

  useEffect(() => {
    const skillsList = [
      t('resume.skill.deep-learning'),
      t('resume.skill.machine-learning'),
      t('resume.skill.chip-design'),
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
    setSkills(skillsList.sort(() => Math.random() - 0.5))
  }, [i18n.language])

  const imageStyle: React.CSSProperties = { height: '100%', aspectRatio: 1 }

  const ProgrammingLanguages = () => (
    <ul className={classes.grid}>
      <li>
        <div className={classes.logo}>
          <MyImage
            alt={t('resume.skill.python')}
            src="/image/python.png"
            width={935}
            height={1024}
            blurhash={'UPIOH{0?04It1AIv~0t304^Zi]jE=;$_4?Rk'}
            style={imageStyle}
          />
        </div>
        {t('resume.skill.python')}
      </li>
      <li>
        <div className={classes.logo}>
          <MyImage
            alt={t('resume.skill.matlab')}
            src="/image/matlab.png"
            width={897}
            height={806}
            blurhash={'UMEw~:3W1O}U9_M|,.$~56+GICEkxbTJx[o|'}
            style={imageStyle}
          />
        </div>
        {t('resume.skill.matlab')}
      </li>
      <li>
        <div className={classes.logo}>
          <MyImage
            alt={t('resume.skill.java')}
            src="/image/java.png"
            width={512}
            height={512}
            blurhash={'U89jAjNb01-5_#R*2_%06ASh]$$%1iR*}9w['}
            style={imageStyle}
          />
        </div>
        {t('resume.skill.java')}
      </li>
      <li>
        <div className={classes.logo}>
          <MyImage
            alt={t('resume.skill.JavaScript')}
            src="/image/js.png"
            width={1052}
            height={1052}
            style={imageStyle}
          />
        </div>
        {t('resume.skill.JavaScript')}
      </li>
      <li>
        <div className={classes.logo}>
          <MyImage
            alt={t('resume.skill.HTML')}
            src="/image/html.png"
            width={512}
            height={512}
            blurhash={'UNQPmCt700rr}skC+^niHXaycsbH;gi_o0kX'}
            style={imageStyle}
          />
        </div>
        {t('resume.skill.HTML')}
      </li>
      <li>
        <div className={classes.logo}>
          <MyImage
            alt={t('resume.skill.CSS')}
            src="/image/css.png"
            width={800}
            height={800}
            blurhash={'UJE3l,Mz00-;%QWBR?t602t6?XIpR?t5j]Rn'}
            style={imageStyle}
          />
        </div>
        {t('resume.skill.CSS')}
      </li>
      <li>
        <div className={classes.logo}>
          <MyImage
            alt={t('resume.skill.C')}
            src="/image/c.png"
            width={360}
            height={405}
            blurhash={'UPF%DX?b00Iq%%j]Ria}00D%r:%1ogWBRij['}
            style={imageStyle}
          />
        </div>
        {t('resume.skill.C')}
      </li>
      <li>
        <div className={classes.logo}>
          <MyImage
            alt={t('resume.skill.Csharp')}
            src="/image/csharp.png"
            width={1200}
            height={1350}
            blurhash={'UUJR5%?I00RV?Kj]R$f84mE0Imt6t7WVRij['}
            style={imageStyle}
          />
        </div>
        {t('resume.skill.Csharp')}
      </li>
      <li>
        <div className={classes.logo}>
          <MyImage
            alt={t('resume.skill.VHDL')}
            src="/image/vhdl.png"
            width={128}
            height={128}
            blurhash={'UHFiR{xm03WGD*?YIJ054rxt-,M}~nD+%F--'}
            style={imageStyle}
          />
        </div>
        {t('resume.skill.VHDL')}
      </li>
      <li>
        <div className={classes.logo}>
          <MyImage
            alt={t('resume.skill.bash-unix')}
            src="/image/bash.png"
            width={2048}
            height={2048}
            blurhash={'UaJ[I-~q004n?bM{IU%M4n9ZWBxuIUt7t7M{'}
            style={imageStyle}
          />
        </div>
        {t('resume.skill.bash-unix')}
      </li>
      <li>
        <div className={classes.logo}>
          <MyImage
            alt={t('resume.skill.mathematica')}
            src="/image/mathematica.png"
            width={1965}
            height={2048}
            blurhash={'UALdlysn00oLxGfQWpbH00WpdBWVoLf6XSj['}
            style={imageStyle}
          />
        </div>
        {t('resume.skill.mathematica')}
      </li>
      <li>
        <div className={classes.logo}>
          <MyImage
            alt={t('resume.skill.assembly')}
            src="/image/assembly.png"
            width={512}
            height={512}
            style={imageStyle}
          />
        </div>
        {t('resume.skill.assembly')}
      </li>
      <li>
        <div className={classes.logo}>
          <MyImage
            alt={t('resume.skill.react')}
            src="/image/react.png"
            width={2300}
            height={2000}
            blurhash={'U28aj6uP00k?t-fjadfk00kDD4f+o}fkaKjt'}
            style={imageStyle}
          />
        </div>
        {t('resume.skill.react')}
      </li>
      <li>
        <div className={classes.logo}>
          <MyImage
            alt={t('resume.skill.react-native')}
            src="/image/reactnative.png"
            width={256}
            height={300}
            blurhash={'UACP@g~q0000_3-;Rj0000D%D%-;4nayIU~q'}
            style={imageStyle}
          />
        </div>
        {t('resume.skill.react-native')}
      </li>
      <li>
        <div className={classes.logo}>
          <MyImage
            alt={t('resume.skill.aws-console')}
            src="/image/aws.png"
            width={1024}
            height={613}
            blurhash={'UYCE:joLazj[15WXoKa}}ooJR-js9^ayxFay'}
            style={imageStyle}
          />
        </div>
        {t('resume.skill.aws-console')}
      </li>
      <li>
        <div className={classes.logo}>
          <MyImage
            alt={t('resume.skill.TypeScript')}
            src="/image/ts.png"
            width={2048}
            height={2048}
            blurhash={'UDC[3F4=0MWZ03-.%KfR02of-.of~oIpIVWC'}
            style={imageStyle}
          />
        </div>
        {t('resume.skill.TypeScript')}
      </li>
      <li>
        <div className={classes.logo}>
          <MyImage
            alt={t('resume.skill.SQL')}
            src="/image/sql.png"
            width={320}
            height={394}
            blurhash={'UX4OTyflpffladfQkDfQaIfPkEfRe.fQkDfQ'}
            style={imageStyle}
          />
        </div>
        {t('resume.skill.SQL')}
      </li>
      <li>
        <div className={classes.logo}>
          <MyImage
            alt={t('resume.skill.docker')}
            src="/image/docker.png"
            width={256}
            height={256}
            blurhash={'UJAAYB%P4mIT%CoYN3Rp00M^-@t69SRs%Dxr'}
            style={imageStyle}
          />
        </div>
        {t('resume.skill.docker')}
      </li>
      <li>
        <div className={classes.logo}>
          <MyImage
            alt={t('resume.skill.excel')}
            src="/image/excel.png"
            width={1101}
            height={1024}
            blurhash={'UO6w;[z{ofM{qCZ*jIafIUIBVtxHbtayafjG'}
            style={imageStyle}
          />
        </div>
        {t('resume.skill.excel')}
      </li>
    </ul>
  )

  const interestsList = [
    t('resume.interestsList.courses'),
    t('resume.interestsList.implementation'),
    t('resume.interestsList.development'),
    t('resume.interestsList.psl'),
    t('resume.interestsList.film'),
    t('resume.interestsList.delegate'),
    t('resume.interestsList.running'),
    t('resume.interestsList.association')
  ]

  const interestRef = useRef<HTMLDivElement | null>(null)

  const Interests = () => (
    <div className={classes.interest} ref={interestRef}>
      <strong>{t('resume.interests.look-at-it-again')}</strong>
      {t('resume.interests.text')}
      <span>{lookAgain(interestRef, interestsList)}</span>
    </div>
  )

  return (
    <Layout summary={summary}>
      <div className={classes.container}>
        <div className={classes.title}>{t('resume.mario-larsen')}</div>
        <div className={classes.subTitle}>
          {innerWidth < 450 ? t('resume.subTitleFull') : t('resume.subTitle')}
        </div>
        <MyImage
          alt="myself"
          src="/image/selfie.jpg"
          priority
          width={3941}
          height={2556}
          blurhash={'L*MQq+RPx]%g~qWBWBtRX9WBj[V['}
          objectFit={'cover'}
          style={{ width: '100%' }}
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
        <div className={classes.listTitle}>{t('resume.interest')}</div>
        <Interests />
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
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },
  dualContainer: {
    [theme.fn.largerThan(1000)]: {
      display: 'flex',
      flexDirection: 'row-reverse'
    }
  },
  columnContainer: {
    [theme.fn.largerThan(1000)]: {
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
    paddingLeft: '5%',
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
      boxShadow: SHADOW,
      width: 100,
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 5,
      borderRadius: 5,
      margin: 5,
      fontSize: '0.9em'
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
      boxShadow: SHADOW,
      width: 130,
      alignItems: 'center',
      padding: 5,
      borderRadius: 5,
      margin: 5,
      [theme.fn.smallerThan(500)]: {
        width: 100
      }
    }
  },
  logo: {
    display: 'flex',
    height: '4em',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 5
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
  subName: {},
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
    boxShadow: SHADOW,
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
  interest: {
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
