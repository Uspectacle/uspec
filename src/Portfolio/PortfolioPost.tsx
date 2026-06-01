import { createStyles } from '@mantine/emotion';
import { useTranslation } from 'react-i18next';
import { DefaultPost } from '../Blog/DefaultPost';
import { MyImage } from '../Utils/MyImage';
import { Note } from './Note';

export const PortfolioPost = ({ index }: { index: number }) => {
  const { t } = useTranslation();
  const { classes } = useStyles();

  return (
    <DefaultPost
      title={t('posts.portfolio.title')}
      text={t('posts.portfolio.text')}
      href={'/portfolio'}
      image={
        <Note seed={7} delay={0} margin={5}>
          <div className={classes.image}>
            {
              <MyImage
                src="/image/Portfolio/mslab.png"
                width={775}
                height={666}
              />
            }
          </div>
        </Note>
      }
      index={index}
    />
  );
};

const useStyles = createStyles(() => ({
  image: {
    border: 'solid 10px white',
  },
}));
