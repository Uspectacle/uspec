import type { TFunction } from 'i18next';
import Image from 'next/image';
import type { ProjectProps } from './Project';

export const ProjectList = (
  t: TFunction<'translation', undefined>,
): ProjectProps[] => [
  {
    title: t('portfolio.mslab.title'),
    date: '2019',
    location: t('portfolio.mslab.location'),
    context: t('portfolio.mslab.context'),
    image: (
      <Image
        src="/image/Portfolio/mslab.png"
        alt="mslab"
        width={775}
        height={666}
      />
    ),
    text: t('portfolio.mslab.text'),
    links: [
      {
        link: t('portfolio.mslab.product-website'),
        href: 'https://mslabos.eu/hum/en/haematology/ms4/',
      },
      {
        link: t('portfolio.read-report'),
        href: '/doc/Portfolio/mslab.pdf',
      },
    ],
  },
  {
    title: t('portfolio.themis.title'),
    date: '2020',
    location: t('portfolio.themis.location'),
    context: t('portfolio.themis.context'),
    image: (
      <Image
        src="/image/Portfolio/themis.jpg"
        alt="themis"
        width={990}
        height={826}
      />
    ),
    text: t('portfolio.themis.text'),
    links: [
      {
        link: t('portfolio.themis.project-website'),
        href: 'http://www-reynal.ensea.fr/?page_id=303',
      },
      {
        link: t('portfolio.read-report'),
        href: '/doc/Portfolio/themis.pdf',
      },
      { link: 'GitHub Page', href: 'https://github.com/reynal/themis' },
    ],
  },
  {
    title: t('portfolio.virtualTryOn.title'),
    date: '2020',
    location: t('portfolio.virtualTryOn.location'),
    context: t('portfolio.virtualTryOn.context'),
    image: (
      <Image
        alt="virtualTryOn"
        src="/image/Portfolio/virtualTryOn.png"
        width={1350}
        height={901}
      />
    ),
    text: t('portfolio.virtualTryOn.text'),
    links: [
      {
        link: t('portfolio.read-report'),
        href: '/doc/Portfolio/virtualTryOn.pdf',
      },
    ],
  },
  {
    title: t('portfolio.pacman.title'),
    date: '2020',
    location: t('portfolio.pacman.location'),
    context: t('portfolio.pacman.context'),
    image: (
      <Image
        src="/image/Portfolio/pacman.png"
        alt="pacman"
        width={808}
        height={661}
      />
    ),
    text: t('portfolio.pacman.text'),
    links: [
      {
        link: t('portfolio.read-report'),
        href: '/doc/Portfolio/pacman.pdf',
      },
      {
        link: 'GitHub Page',
        href: 'https://github.com/Uspectacle/Solver-Pacman',
      },
    ],
  },
  {
    title: t('portfolio.sorting.title'),
    date: '2020',
    location: t('portfolio.sorting.location'),
    context: t('portfolio.sorting.context'),
    image: (
      <Image
        src="/image/Portfolio/sorting.jpg"
        alt="sorting"
        width={1400}
        height={1050}
      />
    ),
    text: t('portfolio.sorting.text'),
    links: [
      {
        link: t('portfolio.sorting.event-website'),
        href: 'https://enseack.asso-ensea.fr/',
      },
      {
        link: t('portfolio.see-slides'),
        href: '/doc/Portfolio/sorting.pdf',
      },
    ],
  },
  {
    title: t('portfolio.cloudModel.title'),
    date: '2017',
    location: t('portfolio.cloudModel.location'),
    context: t('portfolio.cloudModel.context'),
    image: (
      <Image
        src="/image/Portfolio/cloudModel.png"
        alt="cloudModel"
        width={1145}
        height={561}
      />
    ),
    text: t('portfolio.cloudModel.text'),
    links: [
      {
        link: t('portfolio.see-slides'),
        href: '/doc/Portfolio/cloudModel.pdf',
      },
    ],
  },
  {
    title: t('portfolio.tyo.title'),
    date: '2019',
    location: t('portfolio.tyo.location'),
    context: t('portfolio.tyo.context'),
    image: (
      <Image
        src="/image/Portfolio/tyo.jpg"
        alt="tyo"
        width={1400}
        height={1981}
      />
    ),
    text: t('portfolio.tyo.text'),
    links: [
      {
        link: t('portfolio.tyo.festival-website'),
        href: 'http://tyo.asso-ensea.fr/english.html',
      },
    ],
  },
  {
    title: t('portfolio.attenuator.title'),
    date: '2018',
    location: t('portfolio.attenuator.location'),
    context: t('portfolio.attenuator.context'),
    image: (
      <Image
        src="/image/Portfolio/attenuator.png"
        alt="attenuator"
        width={615}
        height={727}
      />
    ),
    text: t('portfolio.attenuator.text'),
    links: [
      {
        link: t('portfolio.read-report'),
        href: '/doc/Portfolio/attenuator.pdf',
      },
    ],
  },
  {
    title: t('portfolio.minesolver.title'),
    date: '2022',
    context: t('portfolio.minesolver.context'),
    image: (
      <Image
        src="/image/Portfolio/minesolver.jpg"
        alt="minesolver"
        width={878}
        height={882}
      />
    ),
    links: [
      {
        link: 'Game Website',
        href: 'https://uspectacle.github.io/minesolver/',
      },
      {
        link: 'GitHub Page',
        href: 'https://github.com/Uspectacle/minesolver',
      },
    ],
  },
  {
    title: t('portfolio.snake.title'),
    date: '2022',
    context: t('portfolio.snake.context'),
    image: (
      <Image
        src="/image/Portfolio/snake.jpg"
        alt="snake"
        width={473}
        height={378}
      />
    ),
    text: t('portfolio.snake.text'),
    links: [
      {
        link: 'Game Website',
        href: 'https://uspectacle.github.io/Snake-Multiplayer/frontend/',
      },
      {
        link: 'GitHub Page',
        href: 'https://github.com/Uspectacle/Snake-Multiplayer',
      },
    ],
  },
  {
    title: t('portfolio.sudoku.title'),
    date: '2016 & 2022',
    context: t('portfolio.sudoku.context'),
    image: (
      <Image
        src="/image/Portfolio/sudoku.png"
        alt="sudoku"
        width={695}
        height={695}
      />
    ),
    text: t('portfolio.sudoku.text'),
    links: [
      {
        link: 'GitHub Page',
        href: 'https://github.com/Uspectacle/Solver-Sudoku',
      },
    ],
  },
  {
    title: t('portfolio.solitaire.title'),
    date: '2021',
    context: t('portfolio.solitaire.context'),
    image: (
      <Image
        src="/image/Portfolio/solitaire.png"
        alt="solitaire"
        width={727}
        height={414}
      />
    ),
    text: t('portfolio.solitaire.text'),
    links: [
      {
        link: 'GitHub Page',
        href: 'https://github.com/Uspectacle/Solver-Solitaire',
      },
    ],
  },
  {
    title: t('portfolio.nonogram.title'),
    date: '2021',
    context: t('portfolio.nonogram.context'),
    image: (
      <Image
        src="/image/Portfolio/nonograme.png"
        alt="nonograme"
        width={331}
        height={324}
      />
    ),
    text: t('portfolio.nonogram.text'),
    links: [
      {
        link: 'GitHub Page',
        href: 'https://github.com/Uspectacle/Solver-Nonogram',
      },
    ],
  },
  {
    title: t('portfolio.mastermind.title'),
    date: '2022',
    context: t('portfolio.mastermind.context'),
    image: (
      <Image
        src="/image/Portfolio/mastermind.png"
        alt="mastermind"
        width={859}
        height={719}
      />
    ),
    text: t('portfolio.mastermind.text'),
    links: [
      {
        link: 'GitHub Page',
        href: 'https://github.com/Uspectacle/Solver-MasterMind',
      },
    ],
  },
  {
    title: t('portfolio.coinflip.title'),
    date: '2022',
    context: t('portfolio.coinflip.context'),
    image: (
      <Image
        src="/image/Portfolio/coinflip.jpg"
        alt="coinflip"
        width={900}
        height={900}
      />
    ),
    text: t('portfolio.coinflip.text'),
    links: [
      {
        link: 'GitHub Page',
        href: 'https://github.com/Uspectacle/Solver-Coin-Flip-Cheaters',
      },
    ],
  },
  {
    title: t('portfolio.wikimpostor.title'),
    date: '2021',
    context: t('portfolio.wikimpostor.context'),
    image: (
      <Image
        src="/image/Portfolio/wikimpostor.jpg"
        alt="wikimpostor"
        width={2223}
        height={2128}
      />
    ),
    text: t('portfolio.wikimpostor.text'),
    links: [
      {
        link: 'GitHub Page',
        href: 'https://github.com/Uspectacle/Wikimpostor',
      },
    ],
  },
  {
    title: t('portfolio.tetris.title'),
    date: '2022',
    context: t('portfolio.tetris.context'),
    image: (
      <Image
        src="/image/Portfolio/tetris.jpg"
        alt="tetris"
        width={948}
        height={836}
      />
    ),
    text: t('portfolio.tetris.text'),
    links: [
      {
        link: 'Game Website',
        href: 'https://uspectacle.github.io/Tetris_web/',
      },
      {
        link: 'GitHub Page',
        href: 'https://github.com/Uspectacle/Tetris_web',
      },
    ],
  },
  {
    title: t('portfolio.minecraft.title'),
    date: '2021',
    context: t('portfolio.minecraft.context'),
    image: (
      <Image
        src="/image/Portfolio/minecraft.gif"
        alt="minecraft"
        width={256}
        height={256}
      />
    ),
    text: t('portfolio.minecraft.text'),
    links: [
      {
        link: 'GitHub Page',
        href: 'https://github.com/Uspectacle/MineCraft-Rhombic-Dodecahedron',
      },
    ],
  },
  {
    title: t('portfolio.findwater.title'),
    date: '2021',
    context: t('portfolio.findwater.context'),
    image: (
      <Image
        src="/image/Portfolio/findwater.jpg"
        alt="findwater"
        width={206}
        height={206}
      />
    ),
    text: t('portfolio.findwater.text'),
    links: [
      {
        link: 'GitHub Page',
        href: 'https://github.com/Uspectacle/Geoquizz-3D',
      },
    ],
  },
  {
    title: t('portfolio.zeta.title'),
    date: '2020',
    context: t('portfolio.zeta.context'),
    image: (
      <Image
        src="/image/Portfolio/zeta.png"
        alt="zeta"
        width={5482}
        height={5470}
      />
    ),
    text: t('portfolio.zeta.text'),
    links: [
      {
        link: 'GitHub Page',
        href: 'https://github.com/Uspectacle/Draw-Zeta-Riemann',
      },
    ],
  },
  {
    title: t('portfolio.youtubesubs.title'),
    date: '2022',
    context: t('portfolio.youtubesubs.context'),
    image: (
      <Image
        src="/image/Portfolio/youtubesubs.jpeg"
        alt="youtubesubs"
        width={2640}
        height={1936}
      />
    ),
    text: t('portfolio.youtubesubs.text'),
    links: [
      {
        link: 'GitHub Page',
        href: 'https://github.com/Uspectacle/Draw-Youtube-Subs',
      },
    ],
  }, // === NEW PROJECTS ADDED 2026-06-06 ===
  {
    title: t('portfolio.chesslab.title'),
    date: '2026',
    context: t('portfolio.chesslab.context'),
    image: (
      <Image
        src="/image/Portfolio/chesslab.png"
        alt="chesslab"
        width={800}
        height={400}
      />
    ),
    text: t('portfolio.chesslab.text'),
    links: [
      {
        link: 'GitHub Repository',
        href: 'https://github.com/Uspectacle/chesslab',
      },
    ],
  },
  {
    title: t('portfolio.psyco-quizz.title'),
    date: '2025',
    context: t('portfolio.psyco-quizz.context'),
    image: (
      <Image
        src="/image/Portfolio/psyco-quizz.png"
        alt="psyco-quizz"
        width={800}
        height={400}
      />
    ),
    text: t('portfolio.psyco-quizz.text'),
    links: [
      { link: 'Live Demo', href: 'https://uspectacle.github.io/psyco-quizz' },
      {
        link: 'GitHub Repository',
        href: 'https://github.com/Uspectacle/psyco-quizz',
      },
    ],
  },
  {
    title: t('portfolio.psl-institute.title'),
    date: '2026',
    context: t('portfolio.psl-institute.context'),
    image: (
      <Image
        src="/image/Portfolio/psl-institute.png"
        style={{ backgroundColor: '#4e300a' }}
        alt="psl-institute"
        width={800}
        height={400}
      />
    ),
    text: t('portfolio.psl-institute.text'),
    links: [
      { link: 'Live Demo', href: 'https://psl.institute/' },
      {
        link: 'GitHub Repository',
        href: 'https://github.com/Uspectacle/psl-institute',
      },
    ],
  },
  {
    title: t('portfolio.tap-loop-game.title'),
    date: '2025',
    context: t('portfolio.tap-loop-game.context'),
    image: (
      <Image
        src="/image/Portfolio/tap-loop-game.png"
        alt="tap-loop-game"
        width={800}
        height={400}
      />
    ),
    text: t('portfolio.tap-loop-game.text'),
    links: [
      {
        link: 'Play Game',
        href: 'https://uspectacle.github.io/tap-loop-game/play?p=37&b=67%7E37%7E56-06-00-50%7E05_06-04_05-03_04-02_03-01_02-10_20-20_30-30_40-40_50-61_62-62_63-63_64-64_65-65_66-00_01-00_10-50_60-60_61-66_67-06_07',
      },
      {
        link: 'GitHub Repository',
        href: 'https://github.com/Uspectacle/tap-loop-game',
      },
    ],
  },
  {
    title: t('portfolio.the-sun-never-set.title'),
    date: '2025',
    context: t('portfolio.the-sun-never-set.context'),
    image: (
      <Image
        src="/image/Portfolio/the-sun-never-set.png"
        alt="the-sun-never-set"
        width={800}
        height={400}
      />
    ),
    text: t('portfolio.the-sun-never-set.text'),
    links: [
      {
        link: 'Live Demo',
        href: 'https://uspectacle.github.io/the-sun-never-set/',
      },
      {
        link: 'GitHub Repository',
        href: 'https://github.com/Uspectacle/the-sun-never-set',
      },
    ],
  },
  {
    title: t('portfolio.historical-basemaps-cleaned.title'),
    date: '2025',
    context: t('portfolio.historical-basemaps-cleaned.context'),
    image: (
      <Image
        src="image/Portfolio/historical-basemap.png"
        alt="historical-basemaps-cleaned"
        width={800}
        height={400}
      />
    ),
    text: t('portfolio.historical-basemaps-cleaned.text'),
    links: [
      {
        link: 'GitHub Repository',
        href: 'https://github.com/Uspectacle/historical-basemaps-cleaned',
      },
    ],
  },
  {
    title: t('portfolio.uninteresting.title'),
    date: '2024',
    context: t('portfolio.uninteresting.context'),
    image: (
      <Image
        src="/image/Portfolio/uninteresting.png"
        alt="uninteresting"
        width={800}
        height={400}
      />
    ),
    text: t('portfolio.uninteresting.text'),
    links: [
      {
        link: 'Live Demo',
        href: 'https://uspectacle.github.io/uninteresting/',
      },
      {
        link: 'GitHub Repository',
        href: 'https://github.com/Uspectacle/uninteresting',
      },
    ],
  },
  {
    title: t('portfolio.truel.title'),
    date: '2024',
    context: t('portfolio.truel.context'),
    image: (
      <Image
        src="/image/Portfolio/truel.png"
        alt="truel"
        width={800}
        height={400}
      />
    ),
    text: t('portfolio.truel.text'),
    links: [
      {
        link: 'GitHub Repository',
        href: 'https://github.com/Uspectacle/Truel',
      },
    ],
  },
];
