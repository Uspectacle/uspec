import React, { useEffect, useState } from 'react';
import { createStyles } from '@mantine/core';
import { clamp } from '../Utils/NumberTools';

export const NumberInput = ({
  initialValue,
  min,
  max,
  onValueChange,
}: {
  initialValue: number;
  min: number;
  max: number;
  onValueChange: (newValue: number) => void;
}) => {
  const [value, setValue] = useState(initialValue);
  const { classes } = useStyles();

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const changeValue = (newValue: number) => {
    const clampedValue = clamp(Math.round(newValue), min, max);
    setValue(clampedValue);
    onValueChange(clampedValue);
  };

  return (
    <div className={classes.container}>
      <div className={classes.button} onClick={() => changeValue(value - 5)}>
        -
      </div>
      <input
        type="text"
        inputMode="numeric"
        pattern="\d*"
        value={`${value}`}
        onChange={(event) => {
          const newValue = parseFloat(event.currentTarget.value);
          if (!isNaN(newValue)) {
            setValue(newValue);
          }
        }}
        onBlur={(event) => {
          const newValue = parseFloat(event.currentTarget.value);
          if (!isNaN(newValue)) {
            changeValue(newValue);
          }
        }}
        className={classes.numberDisplay}
      />
      {/* {value}
      </input> */}
      <div className={classes.button} onClick={() => changeValue(value + 5)}>
        +
      </div>
    </div>
  );
};

const useStyles = createStyles(() => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: 'black',
    backgroundColor: 'white',
    fontWeight: 'bold',
    borderRadius: '1em',
    width: '7em',
  },
  numberDisplay: {
    // flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 0,
    width: '3em',
    height: 'auto',
    border: 'none',
    outline: 'none',
  },
  button: {
    width: '2em',
    height: '2em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '1em',
    userSelect: 'none',
  },
}));
