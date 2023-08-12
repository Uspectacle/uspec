import { createStyles } from '@mantine/core';
import Link from 'next/link';

interface BackProps {
  width: string;
  height: string;
  color: string;
  url?: string;
  handlerClick?: () => void;
}

export const GoBack = ({ height, url, handlerClick }: BackProps) => {
  const { classes } = useStyles();

  return (
    <div style={{ width: 'fit-content', height: `${height}px` }}>
      {(url && <Link href={url} passHref={true}></Link>) || null}

      {(handlerClick && (
        <div
          className={classes.svgContainer}
          onClick={() => {
            handlerClick();
          }}
        ></div>
      )) ||
        null}
    </div>
  );
};

const useStyles = createStyles(() => ({
  svgContainer: {
    cursor: 'pointer'
  }
}));
