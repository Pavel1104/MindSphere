// lib/numerology/types.ts

export interface NumerologyData {
  id: string;
  value: number;
}

export interface DateParts {
  day: number;
  month: number;
  year: number;
}

export interface NumerologyResults {
  birthday: Date | null;
  data: NumerologyData[];
  isCalculated: boolean;
}

export interface NumerologyStore extends NumerologyResults {
  setBirthday: (date: Date | null) => void;
  setData: (data: NumerologyData[]) => void;
  clearData: () => void;
}

// Position categories for better organization
export interface PositionCategories {
  basic: NumerologyData[];      // 1-21
  extended: NumerologyData[];   // 30-35
  special: NumerologyData[];    // k positions, pr positions
  letters: NumerologyData[];    // a-i positions
  fields: NumerologyData[];     // field positions
  additional: NumerologyData[]; // minus, plus, etc.
}

export type PositionId = string | number;
