import { NextPage } from 'next';
import React from 'react';
import { MyImage } from '../src/Utils/MyImage';

const Test: NextPage = () => {
  return (
    <div style={{ width: 400 }}>
      <MyImage
        alt="myself"
        src="/image/selfie.jpg"
        width={3941}
        height={2556}
        blurhash={'L*MQq+RPx]%g~qWBWBtRX9WBj[V['}
        objectFit={'cover'}
        priority
      />
    </div>
  );
};

export default Test;
