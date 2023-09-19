import { createStyles } from '@mantine/core';
import React from 'react';
import { ZoomAndDrag } from './ZoomAndDrag';
import { FloatingMenu } from './FloatingMenu';
import Exit from '../../public/svg/exit';
import { Game } from './Game/Game';
import Restart from '../../public/svg/Restart';
import { useDispatch } from 'react-redux';
import { restart } from './Store/minesweeperStateStore';
import Robot from '../../public/svg/Robot';
import Gear from '../../public/svg/Gear';
import { ConfettiControl } from './ConfettiControl';
import Chart from '../../public/svg/Chart';
import Question from '../../public/svg/Question';

export const MinesweeperLayout = ({
  focus,
  setFocus,
}: {
  focus: boolean;
  setFocus: (focus: boolean) => void;
}) => {
  const { classes } = useStyles();
  const dispatch = useDispatch();

  return (
    <div
      className={classes.container}
      style={!focus ? { opacity: 0, zIndex: -1 } : {}}
    >
      <FloatingMenu
        buttons={[
          {
            key: 'exit',
            color: 'red',
            span: (
              <span style={{ transform: 'rotate(0.5turn)' }}>
                <Exit />
              </span>
            ),
            action: () => {
              setFocus(false);
            },
          },
          {
            key: 'restart',
            color: 'orange',
            span: (
              <span>
                <Restart />
              </span>
            ),
            action: () => {
              dispatch(restart());
            },
          },
          {
            key: 'stats',
            color: '#e9f816',
            span: (
              <span>
                <Chart />
              </span>
            ),
            action: () => {
              console.log('stats');
            },
          },
          {
            key: 'robot',
            color: '#bc2bff',
            span: (
              <span>
                <Robot />
              </span>
            ),
            action: () => {
              console.log('robot');
            },
          },
          {
            key: 'settings',
            color: '#108cff',
            span: (
              <span>
                <Gear />
              </span>
            ),
            action: () => {
              console.log('settings');
            },
          },
          {
            key: 'info',
            color: '#43f816',
            span: (
              <span>
                <Question />
              </span>
            ),
            action: () => {
              console.log('stats');
            },
          },
        ]}
      />
      <ConfettiControl active={true} />
      <ZoomAndDrag>
        <Game showProb={false} randomPlay={false} autoPlayTime={null} />
      </ZoomAndDrag>
    </div>
  );
};

const useStyles = createStyles(() => ({
  container: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    transition: 'opacity 0.5s, padding 0.5s, margin 0.5s',
  },
  main: {
    height: 1000,
    width: 1000,
    overflow: 'hidden',
  },
}));
