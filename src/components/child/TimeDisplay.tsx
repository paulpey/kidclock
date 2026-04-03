const DAYS = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
const MONTHS = [
  'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
  'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre',
];

interface Props {
  hours: number;
  minutes: number;
  date: number;
  month: number;
  dayOfWeek: number;
  variant: 'night' | 'day';
}

export function TimeDisplay({ hours, minutes, date, month, dayOfWeek, variant }: Props) {
  const timeStr = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
  const dateStr = `${DAYS[dayOfWeek]} ${date} ${MONTHS[month]}`;

  const color = variant === 'night' ? '#C8B6FF' : '#4a3f8a';
  const opacity = variant === 'night' ? 0.6 : 0.5;

  return (
    <div
      className="absolute top-4 left-6 z-10"
      style={{ color, opacity }}
    >
      <div className="text-[16px] font-medium leading-tight">{timeStr}</div>
      <div className="text-[12px] leading-tight">{dateStr}</div>
    </div>
  );
}
