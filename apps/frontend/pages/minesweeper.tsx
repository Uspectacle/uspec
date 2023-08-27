import { NextPage } from 'next';
import { Layout } from '../src/Layouts/Layout';
import React, { useEffect, useState } from 'react';
import { Summary } from '../src/Minesweeper/Summary';
import { Title } from '../src/Minesweeper/Title';
import { MinesweeperLayout } from '../src/Minesweeper/MinesweeperLayout';
import { MINESWEEPER_BACKGROUND } from '../src/Minesweeper/MinesweeperStyle';
import { useDispatch } from 'react-redux';
import { restart } from '../src/Minesweeper/gameStateStore';

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
      backgroundStyle={{
        transition: 'background 0.3s',
        backgroundColor: focus ? MINESWEEPER_BACKGROUND : '',
      }}
    >
      <>
        <MinesweeperLayout focus={focus} setFocus={setFocus} />
        <Title focus={focus} setFocus={setFocus} />
      </>
    </Layout>
  );
};

export default Minesweeper;
