import { NextPage } from 'next';
import { Layout } from '../src/Layouts/Layout';
import React, { useState } from 'react';
import { Summary } from '../src/Minesweeper/Summary';
import { Title } from '../src/Minesweeper/Title';
import { MinesweeperLayout } from '../src/Minesweeper/MinesweeperLayout';

const Minesweeper: NextPage = () => {
  const [focus, setFocus] = useState(false);

  return (
    <Layout
      summary={<Summary />}
      reduced={focus}
      backgroundStyle={{
        transition: 'background 0.3s',
        backgroundColor: focus ? '#121211' : '',
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
