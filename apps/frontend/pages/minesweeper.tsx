import { NextPage } from 'next';
import { Layout } from '../src/Layouts/Layout';
import React, { useEffect, useState } from 'react';
import { Summary } from '../src/Minesweeper/Summary';
import { Title } from '../src/Minesweeper/Title';
import { MinesweeperLayout } from '../src/Minesweeper/MinesweeperLayout';
import { useDispatch } from 'react-redux';
import { restart } from '../src/Minesweeper/minesweeperStateStore';

const Minesweeper: NextPage = () => {
  const [focus, setFocus] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(restart());
  }, []);
  return (
    <Layout
      summary={<Summary />}
      reduced={focus}
      backgroundTag={focus ? 'minesweeper' : ''}
    >
      <>
        <MinesweeperLayout focus={focus} setFocus={setFocus} />
        <Title focus={focus} setFocus={setFocus} />
      </>
    </Layout>
  );
};

export default Minesweeper;
