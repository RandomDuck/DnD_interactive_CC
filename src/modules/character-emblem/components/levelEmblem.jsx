import { useAtom } from 'jotai';
import { CircularEmblem } from '../imports';

const LevelEmblem = ({ config }) => {
  const [level] = useAtom(config);
  return (
    <CircularEmblem id='level' data-testid="level">
      {level}
    </CircularEmblem>
  );
}

export { LevelEmblem };
