import React, { useEffect, useState } from 'react';
import { useMinesweeperStyles } from './MinesweeperStyle';

type Segment = {
  id: number;
  label: string;
  value: number;
};

interface SegmentedControlProps {
  value: number;
  data: Segment[];
  onChange: (value: number) => void;
}

const SegmentedControl: React.FC<SegmentedControlProps> = ({
  value,
  data,
  onChange,
}) => {
  const [activeSegment, setActiveSegment] = useState<Segment>(data[0]);
  const { classes } = useMinesweeperStyles();

  useEffect(() => {
    if (activeSegment?.value === value) return;
    const valueSegment = data.find((segment) => segment.value === value);
    if (valueSegment?.id) setActiveSegment(valueSegment);
    else {
      setActiveSegment(data[0]);
      onChange(data[0].value);
    }
  }, [value]);

  return (
    <div className={classes.segmentedControl}>
      {data.map((segment) => (
        <button
          key={segment.id}
          className={`${classes.segment} ${
            activeSegment.id === segment.id ? 'active' : ''
          }`}
          onClick={() => {
            setActiveSegment(segment);
            onChange(segment.value);
          }}
        >
          {segment.label}
        </button>
      ))}
    </div>
  );
};

export default SegmentedControl;
