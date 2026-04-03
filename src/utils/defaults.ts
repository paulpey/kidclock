import type { AppConfig } from '../types/config';

export const DEFAULT_CONFIG: AppConfig = {
  weekday: { wakeTime: '07:00', sleepTime: '20:30' },
  weekend: { wakeTime: '08:00', sleepTime: '21:00' },
  pin: '1234',
  routines: [
    { id: '1',  icon: 'wake',      label: 'Réveil',            color: '#FFD93D', time: '07:00' },
    { id: '2',  icon: 'breakfast',  label: 'Petit-déjeuner',    color: '#FF8C42', time: '07:15' },
    { id: '3',  icon: 'teeth',      label: 'Brossage de dents', color: '#5DCAA5', time: '07:40' },
    { id: '4',  icon: 'dress',      label: "S'habiller",        color: '#85B7EB', time: '07:55' },
    { id: '5',  icon: 'school',     label: 'Départ école',      color: '#AFA9EC', time: '08:15' },
    { id: '6',  icon: 'snack',      label: 'Goûter',            color: '#F0997B', time: '16:30' },
    { id: '7',  icon: 'bath',       label: 'Bain',              color: '#85B7EB', time: '18:00' },
    { id: '8',  icon: 'dinner',     label: 'Dîner',             color: '#FF8C42', time: '18:45' },
    { id: '9',  icon: 'teeth',      label: 'Brossage de dents', color: '#5DCAA5', time: '19:30' },
    { id: '10', icon: 'story',      label: 'Histoire',          color: '#ED93B1', time: '19:50' },
    { id: '11', icon: 'sleep',      label: 'Coucher',           color: '#7F77DD', time: '20:15' },
  ],
};
