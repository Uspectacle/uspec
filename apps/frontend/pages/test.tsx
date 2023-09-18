import { NextPage } from 'next';
import React from 'react';
import Panning from '../src/Panning';

const Test: NextPage = () => {
  //   const mapImageUrl = 'image/Tetris/russia.jpg';

  return <Panning imageUrl={'image/Tetris/russia.jpg'} />;
};

export default Test;
