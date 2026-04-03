import type { RoutineIconType } from '../../types/config';
import {
  SunIcon, BreakfastIcon, ToothbrushIcon, DressIcon,
  SchoolBagIcon, SnackIcon, BathIcon, DinnerIcon, StoryIcon, SleepIcon,
} from '../../icons';

interface Props {
  icon: RoutineIconType;
  size?: number;
}

const iconMap: Record<RoutineIconType, React.FC<{ size?: number }>> = {
  wake: SunIcon,
  breakfast: BreakfastIcon,
  teeth: ToothbrushIcon,
  dress: DressIcon,
  school: SchoolBagIcon,
  snack: SnackIcon,
  bath: BathIcon,
  dinner: DinnerIcon,
  story: StoryIcon,
  sleep: SleepIcon,
};

export function RoutineIcon({ icon, size = 64 }: Props) {
  const Icon = iconMap[icon];
  return <Icon size={size} />;
}
