import { useAtom } from 'jotai';
import { CircularEmblem } from '../resources/style';

const LevelEmblem = ({ config }) => {
  const [level] = useAtom(config);
  return (
    <CircularEmblem id='level' data-testid="level">
      {level}
    </CircularEmblem>
  );
}

export { LevelEmblem };
