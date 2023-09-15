import { createStyles } from '@mantine/core';
import React from 'react';
import { ExitButton } from '../Buttons/ExitButton';
import { BackButton } from '../Buttons/BackButton';
import { NextButton } from '../Buttons/NextButton';
import { MyImage } from '../../Utils/MyImage';

export const PageNavigationTop = ({
  page,
  pagesLength,
  setPage,
  setFocus,
}: {
  page: number;
  pagesLength: number;
  setPage: (page: number) => void;
  setFocus: (focus: boolean) => void;
}) => {
  const { classes } = useStyles();
  return (
    <div className={classes.topContainer}>
      <BackButton page={page} setPage={setPage} layout={'mobile'}>
        <>
          <MyImage
            src="/svg/chevron-arrow.svg"
            width={800}
            height={800}
            style={{ transform: 'rotate(0.5turn)', width: '1em' }}
          />
          Back
        </>
      </BackButton>
      <ExitButton setFocus={setFocus} />
      <NextButton
        page={page}
        setPage={setPage}
        max={pagesLength - 1}
        layout={'mobile'}
      >
        <>
          Next
          <MyImage
            src="/svg/chevron-arrow.svg"
            width={800}
            height={800}
            style={{ width: '1em' }}
          />
        </>
      </NextButton>
    </div>
  );
};

export const PageNavigationBottom = ({
  page,
  pagesLength,
  setPage,
}: {
  page: number;
  pagesLength: number;
  setPage: (page: number) => void;
}) => {
  const { classes } = useStyles();
  return (
    <div className={classes.bottomContainer}>
      <BackButton page={page} setPage={setPage}>
        <>
          <MyImage
            src="/svg/chevron-arrow.svg"
            width={800}
            height={800}
            style={{ transform: 'rotate(0.5turn)', width: '1em' }}
          />
          Back
        </>
      </BackButton>
      <NextButton page={page} setPage={setPage} max={pagesLength - 1}>
        <>
          Next
          <MyImage
            src="/svg/chevron-arrow.svg"
            width={800}
            height={800}
            style={{ width: '1em' }}
          />
        </>
      </NextButton>
    </div>
  );
};

const useStyles = createStyles((theme) => ({
  topContainer: {
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  bottomContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    margin: 10,
    [theme.fn.smallerThan(750)]: {
      display: 'none',
    },
  },
}));
