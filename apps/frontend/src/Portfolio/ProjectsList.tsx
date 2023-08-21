import React from 'react';
import { MyImage } from '../Utils/MyImage';
import { ProjectProps } from './Project';
import { TFunction } from 'i18next';

export const ProjectList = (
  t: TFunction<'translation', undefined>
): ProjectProps[] => {
  return [
    {
      title: t('portfolio.mslab.title'),
      date: '2019',
      location: t('portfolio.mslab.location'),
      context: t('portfolio.mslab.context'),
      image: (
        <MyImage src="/image/Portfolio/mslab.png" width={775} height={666} />
      ),
      text: t('portfolio.mslab.text'),
      links: [
        {
          link: t('portfolio.mslab.product-website'),
          href: 'https://mslabos.eu/hum/en/haematology/ms4/',
        },
        { link: t('portfolio.read-report'), href: '/doc/Portfolio/mslab.pdf' },
      ],
    },
    {
      title: t('portfolio.themis.title'),
      date: '2020',
      location: t('portfolio.themis.location'),
      context: t('portfolio.themis.context'),
      image: (
        <MyImage src="/image/Portfolio/themis.jpg" width={990} height={826} />
      ),
      text: t('portfolio.themis.text'),
      links: [
        {
          link: t('portfolio.themis.project-website'),
          href: 'http://www-reynal.ensea.fr/?page_id=303',
        },
        { link: t('portfolio.read-report'), href: '/doc/Portfolio/themis.pdf' },
        { link: 'GitHub Page', href: 'https://github.com/reynal/themis' },
      ],
    },
    {
      title: t('portfolio.virtualTryOn.title'),
      date: '2020',
      location: t('portfolio.virtualTryOn.location'),
      context: t('portfolio.virtualTryOn.context'),
      image: (
        <MyImage
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
        <MyImage src="/image/Portfolio/pacman.png" width={808} height={661} />
      ),
      text: t('portfolio.pacman.text'),
      links: [
        { link: t('portfolio.read-report'), href: '/doc/Portfolio/pacman.pdf' },
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
        <MyImage
          src="/image/Portfolio/sorting.jpg"
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
        <MyImage
          src="/image/Portfolio/cloudModel.png"
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
        <MyImage src="/image/Portfolio/tyo.jpg" width={1400} height={1981} />
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
        <MyImage
          src="/image/Portfolio/attenuator.png"
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
        <MyImage
          src="/image/Portfolio/minesolver.png"
          width={615}
          height={727}
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
        <MyImage src="/image/Portfolio/snake.png" width={615} height={727} />
      ),
      text: t('portfolio.snake.text'),
      links: [
        {
          link: 'Game Website',
          href: 'https://uspectacle.github.io/Snake-Multiplayer/frontend/index.html',
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
        <MyImage src="/image/Portfolio/sudoku.png" width={615} height={727} />
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
        <MyImage
          src="/image/Portfolio/solitaire.png"
          width={615}
          height={727}
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
      title: t('portfolio.nonograme.title'),
      date: '2021',
      context: t('portfolio.nonograme.context'),
      image: (
        <MyImage
          src="/image/Portfolio/nonograme.png"
          width={615}
          height={727}
        />
      ),
      text: t('portfolio.nonograme.text'),
      links: [
        {
          link: 'GitHub Page',
          href: 'https://github.com/Uspectacle/Solver-Nonograme',
        },
      ],
    },
    {
      title: t('portfolio.mastermind.title'),
      date: '2022',
      context: t('portfolio.mastermind.context'),
      image: (
        <MyImage
          src="/image/Portfolio/mastermind.png"
          width={615}
          height={727}
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
        <MyImage src="/image/Portfolio/coinflip.png" width={615} height={727} />
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
        <MyImage
          src="/image/Portfolio/wikimpostor.png"
          width={615}
          height={727}
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
        <MyImage src="/image/Portfolio/tetris.png" width={615} height={727} />
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
        <MyImage
          src="/image/Portfolio/minecraft.png"
          width={615}
          height={727}
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
        <MyImage
          src="/image/Portfolio/findwater.jpg"
          width={615}
          height={727}
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
        <MyImage src="/image/Portfolio/zeta.png" width={615} height={727} />
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
        <MyImage
          src="/image/Portfolio/youtubesubs.png"
          width={615}
          height={727}
        />
      ),
      text: t('portfolio.youtubesubs.text'),
      links: [
        {
          link: 'GitHub Page',
          href: 'https://github.com/Uspectacle/Draw-Youtube-Subs',
        },
      ],
    },
  ];
};
