import { createStyles } from '@mantine/core';
import { NextPage } from 'next';
import { MyImage } from '../src/Utils/MyImage';

const Test: NextPage = () => {
  const { classes } = useStyles();
  return (
    <div>
      <div className={classes.image}>
        <MyImage src="/image/selfie.jpg" width={3941} height={2556} />
        <MyImage src="/image/selfie.jpg" width={3941} height={2556} />
        <MyImage src="/image/selfie.jpg" width={3941} height={2556} />
        <MyImage src="/image/selfie.jpg" width={3941} height={2556} />
        <MyImage src="/image/selfie.jpg" width={3941} height={2556} />
      </div>
    </div>
  );
};

const useStyles = createStyles(() => ({
  image: {
    width: 500,
  },
}));

export default Test;
