import { ModInput, ModDisplay } from '@/components/modifiers';
import { StyledLi } from './resources/style';

export function AbilityScore({ type, size = 'm', displayScore }) {
  return (
    <StyledLi data-testid="ability-score">
      <ModDisplay boxName={type} type={type} text={type[0].toUpperCase() + type.substring(1) + ': '} displayScore={displayScore} />
      <ModInput type={type} size={size} />
    </StyledLi>
  );
}
