// lib/numerology/calculations.ts

import type { NumerologyData, DateParts } from './types';

/**
 * Split date into day, month, year
 */
const splitDate = (date: Date): DateParts => {
  const day = date.getDate();
  const month = date.getMonth() + 1; // getMonth() returns 0-11
  const year = date.getFullYear();

  return { day, month, year };
};

/**
 * Calculate sum of digits in a number
 */
const digitsSum = (number: number): number => {
  let sum = 0;
  let value = Math.abs(number);

  while (value > 0) {
    sum += value % 10;
    value = Math.floor(value / 10);
  }

  return sum;
};

/**
 * Prepare number according to numerology rules
 * If 0 -> 22, if <= 22 -> return as is, if > 22 -> subtract 22 recursively
 */
const prepareData = (number: number): number => {
  if (number === 0) return 22;
  if (number <= 22) return number;

  const lessBy22 = number - 22;
  return prepareData(lessBy22);
};

/**
 * Main numerology calculation function
 */
export const calculateNumerology = (birthday: Date): NumerologyData[] => {
  const { day, month, year } = splitDate(birthday);
  const data: NumerologyData[] = [];

  // Basic calculations
  const v1 = prepareData(day);
  const v2 = prepareData(month);
  const v3 = prepareData(digitsSum(year));
  const v4 = prepareData(v1 + v2);
  const v5 = prepareData(v2 + v3);
  const v6 = prepareData(v4 + v5);
  const v7 = prepareData(v1 + v5);
  const v8 = prepareData(v2 + v6);
  const v9 = prepareData(Math.abs(v1 - v2));
  const v10 = prepareData(Math.abs(v2 - v3));
  const v11 = prepareData(Math.abs(v9 - v10));
  const v12 = prepareData(v7 + v8);
  const v13 = prepareData(v1 + v4 + v6);
  const v14 = prepareData(v3 + v5 + v6);
  const v15 = prepareData(Math.abs(v9 + v10 + v11 - v7));
  const v16 = prepareData(v1 + v3 + v4 + v5);
  const v17 = prepareData(v6 + v11);
  const v18 = prepareData(v8 + v11);
  const v19 = prepareData(v4 + v6);
  const v20 = prepareData(v5 + v6);
  const v21 = prepareData(v1 + v2 + v3 + v4 + v5 + v6);

  const va = prepareData(v1 + v4);

  const v30 = prepareData(v12 * 2);
  const v31 = prepareData(digitsSum(day) + digitsSum(month) + digitsSum(year));
  const v32 = prepareData(Math.abs(va - v10));
  const v33 = prepareData(Math.abs(va - v12));
  const v34 = prepareData(Math.abs(va - v11));
  const v35 = prepareData(Math.abs(v9 + v10 + v11 - 10));

  // Add basic positions (1-21, 30-35)
  const positions = [
    v1, v2, v3, v4, v5, v6, v7, v8, v9, v10,
    v11, v12, v13, v14, v15, v16, v17, v18, v19, v20, v21
  ];

  positions.forEach((value, index) => {
    data.push({ id: (index + 1).toString(), value });
  });

  // Add positions 30-35
  [v30, v31, v32, v33, v34, v35].forEach((value, index) => {
    data.push({ id: (index + 30).toString(), value });
  });

  // Special positions
  const v2k = v2;
  data.push({ id: '2k', value: v2k });

  const v4k = prepareData(v9 + v2k);
  data.push({ id: '4k', value: v4k });

  const vkz1 = v11;
  data.push({ id: 'kz1', value: vkz1 });

  const vkz2 = prepareData(v9 + v10 + v11);
  data.push({ id: 'kz2', value: vkz2 });

  const vpr1 = v13;
  data.push({ id: 'pr1', value: vpr1 });

  const vpr2 = prepareData(v6 + v8);
  data.push({ id: 'pr2', value: vpr2 });

  const vpr3 = v14;
  data.push({ id: 'pr3', value: vpr3 });

  // Letter positions
  const vb = prepareData(v2 + v4);
  const vc = prepareData(v2 + v5);
  const vd = prepareData(v3 + v5);
  const ve = prepareData(v4 + v6);
  const vf = prepareData(v5 + v6);
  const vh = prepareData(va + ve);

  data.push({ id: 'a', value: va });
  data.push({ id: 'b', value: vb });
  data.push({ id: 'c', value: vc });
  data.push({ id: 'd', value: vd });
  data.push({ id: 'e', value: ve });
  data.push({ id: 'f', value: vf });
  data.push({ id: 'h', value: vh });

  const vg1 = prepareData(vc + vd);
  data.push({ id: 'g1', value: vg1 });

  const vg2 = prepareData(vb + vf);
  data.push({ id: 'g2', value: vg2 });

  const vi = prepareData(vg1 + vg2);
  data.push({ id: 'i', value: vi });

  // Additional calculations
  const vMinus = prepareData(v4 + vb);
  data.push({ id: 'minus', value: vMinus });

  const vPlus = prepareData(v5 + vc);
  data.push({ id: 'plus', value: vPlus });

  const v4c = prepareData(v4 + vc);
  data.push({ id: '4c', value: v4c });

  const v5b = prepareData(v5 + vb);
  data.push({ id: '5b', value: v5b });

  // Field calculations
  const vFieldY = prepareData(v1 + v31);
  const vFieldYMinus = prepareData(vFieldY + v1);
  const vFieldYPlus = prepareData(vFieldY + v31);
  data.push({ id: 'fieldY', value: vFieldY });
  data.push({ id: 'fieldYMinus', value: vFieldYMinus });
  data.push({ id: 'fieldYPlus', value: vFieldYPlus });

  const vFieldA = prepareData(v2 + v31);
  const vFieldAMinus = prepareData(vFieldA + v2);
  const vFieldAPlus = prepareData(vFieldA + v31);
  data.push({ id: 'fieldA', value: vFieldA });
  data.push({ id: 'fieldAMinus', value: vFieldAMinus });
  data.push({ id: 'fieldAPlus', value: vFieldAPlus });

  const vFieldO = prepareData(v3 + v31);
  const vFieldOMinus = prepareData(vFieldO + v3);
  const vFieldOPlus = prepareData(vFieldO + v31);
  data.push({ id: 'fieldO', value: vFieldO });
  data.push({ id: 'fieldOMinus', value: vFieldOMinus });
  data.push({ id: 'fieldOPlus', value: vFieldOPlus });

  return data;
};

// Export utility functions for use in other components
export { digitsSum, prepareData, splitDate };
