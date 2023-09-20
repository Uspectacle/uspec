import React, { useState } from 'react';
import { FloatingMenu } from './FloatingMenu';
import { useDispatch } from 'react-redux';
import { restart } from './Store/minesweeperStateStore';
import { Settings } from './Settings';
import { Stats } from './Stats';
import { Robot } from './Robot';
import { Info } from './Info';
import { SVG } from '../Utils/Svg';
import { Modal } from './Modal';

enum ModalEnum {
  NONE,
  SETTINGS,
  STATS,
  ROBOT,
  INFO,
}

const selectModal = (name: ModalEnum) => {
  switch (name) {
    case ModalEnum.SETTINGS:
      return <Settings />;
    case ModalEnum.STATS:
      return <Stats />;
    case ModalEnum.ROBOT:
      return <Robot />;
    case ModalEnum.INFO:
      return <Info />;
  }
  return <></>;
};

export const Menu = ({ setFocus }: { setFocus: (focus: boolean) => void }) => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(ModalEnum.NONE);

  return (
    <>
      <Modal
        isOpen={modal !== ModalEnum.NONE}
        onClose={() => setModal(ModalEnum.NONE)}
      >
        {selectModal(modal)}
      </Modal>
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
            action: () => {
              dispatch(restart());
              setModal(ModalEnum.NONE);
            },
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
              setModal(
                modal === ModalEnum.STATS ? ModalEnum.NONE : ModalEnum.STATS
              ),
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
              setModal(
                modal === ModalEnum.ROBOT ? ModalEnum.NONE : ModalEnum.ROBOT
              ),
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
              setModal(
                modal === ModalEnum.SETTINGS
                  ? ModalEnum.NONE
                  : ModalEnum.SETTINGS
              ),
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
              setModal(
                modal === ModalEnum.INFO ? ModalEnum.NONE : ModalEnum.INFO
              ),
          },
        ]}
      />
    </>
  );
};
