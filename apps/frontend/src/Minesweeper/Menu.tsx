import React, { useState } from 'react';
import { FloatingMenu } from './FloatingMenu';
import { useDispatch } from 'react-redux';
import { restart } from './Store/minesweeperStateStore';
import { Settings } from './Settings';
import { Stats } from './Stats';
import { Robot } from './Robot';
import { Info } from './Info';
import { SVG } from '../Utils/Svg';

enum Modal {
  NONE,
  SETTINGS,
  STATS,
  ROBOT,
  INFO,
}

export const Menu = ({ setFocus }: { setFocus: (focus: boolean) => void }) => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(Modal.NONE);

  return (
    <>
      <Settings
        isOpen={modal === Modal.SETTINGS}
        onClose={() => setModal(Modal.NONE)}
      />
      <Stats
        isOpen={modal === Modal.STATS}
        onClose={() => setModal(Modal.NONE)}
      />
      <Robot
        isOpen={modal === Modal.ROBOT}
        onClose={() => setModal(Modal.NONE)}
      />
      <Info
        isOpen={modal === Modal.INFO}
        onClose={() => setModal(Modal.NONE)}
      />
      <FloatingMenu
        buttons={[
          {
            key: 'exit',
            color: 'red',
            span: (
              <span style={{ transform: 'rotate(0.5turn)' }}>
                <SVG.Exit />
              </span>
            ),
            action: () => setFocus(false),
          },
          {
            key: 'restart',
            color: 'orange',
            span: (
              <span>
                <SVG.Restart />
              </span>
            ),
            action: () => dispatch(restart()),
          },
          {
            key: 'stats',
            color: '#e9f816',
            span: (
              <span>
                <SVG.Chart />
              </span>
            ),
            action: () =>
              setModal(modal === Modal.STATS ? Modal.NONE : Modal.STATS),
          },
          {
            key: 'robot',
            color: '#bc2bff',
            span: (
              <span>
                <SVG.Robot />
              </span>
            ),
            action: () =>
              setModal(modal === Modal.ROBOT ? Modal.NONE : Modal.ROBOT),
          },

          {
            key: 'settings',
            color: '#108cff',
            span: (
              <span>
                <SVG.Gear />
              </span>
            ),
            action: () =>
              setModal(modal === Modal.SETTINGS ? Modal.NONE : Modal.SETTINGS),
          },
          {
            key: 'info',
            color: '#43f816',
            span: (
              <span>
                <SVG.Question />
              </span>
            ),
            action: () =>
              setModal(modal === Modal.INFO ? Modal.NONE : Modal.INFO),
          },
        ]}
      />
    </>
  );
};
