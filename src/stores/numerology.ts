import { create } from 'zustand';
import type { NumerologyResults, NumerologyData } from '@/lib/numerology/types';

interface NumerologyStore extends NumerologyResults {
  setBirthday: (date: Date | null) => void;
  setData: (data: NumerologyData[]) => void;
  clearData: () => void;
}

export const useNumerologyStore = create<NumerologyStore>((set) => ({
  birthday: null,
  data: [],
  isCalculated: false,

  setBirthday: (date) => set({ birthday: date }),

  setData: (data) => set({
    data,
    isCalculated: true
  }),

  clearData: () => set({
    data: [],
    isCalculated: false
  }),
}));
