import { ClassAttributes, HTMLAttributes, JSX } from 'react';
import Chart from '../../public/svg/Chart';
import ChevronArrow from '../../public/svg/ChevronArrow';
import Ellipsis from '../../public/svg/Ellipsis';
import Exit from '../../public/svg/Exit';
import Gear from '../../public/svg/Gear';
import Github from '../../public/svg/Github';
import Pdf from '../../public/svg/Pdf';
import Question from '../../public/svg/Question';
import ReplyArrow from '../../public/svg/ReplyArrow';
import Restart from '../../public/svg/Restart';
import Robot from '../../public/svg/Robot';
import Bomb from '../../public/svg/Bomb';
import FlagEn from '../../public/svg/FlagEn';
import FlagEs from '../../public/svg/FlagEs';
import FlagFr from '../../public/svg/FlagFr';

const mapObject = <Input, Output>(
  obj: Record<string, Input>,
  func: (value: Input) => Output
): Record<string, Output> => {
  const result: Record<string, Output> = {};
  for (const key in obj) {
    result[key] = func(obj[key]);
  }
  return result;
};

export const SVG = mapObject(
  {
    Bomb,
    Chart,
    ChevronArrow,
    Ellipsis,
    Exit,
    FlagEn,
    FlagEs,
    FlagFr,
    Gear,
    Github,
    Pdf,
    Question,
    ReplyArrow,
    Restart,
    Robot,
  },
  (module) =>
    (
      props: JSX.IntrinsicAttributes &
        ClassAttributes<HTMLDivElement> &
        HTMLAttributes<HTMLDivElement>
    ) => <div {...props}> {module()}</div>
);
