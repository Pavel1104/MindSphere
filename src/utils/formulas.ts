export function splitDate(birthday: string) {
  const [year, month, day] = birthday.split("-").map(Number);
  return { day, month, year };
}

export function digitsSum(number: number): number {
  let sum = 0;
  let value = number;

  while (value) {
    sum += value % 10;
    value = Math.trunc(value / 10);
  }

  return sum;
}

export function prepareData(number: number): number {
  if (number === 0) return 22;
  if (number <= 22) return number;
  return prepareData(number - 22);
}

export function calculateKarma(birthday: string) {
  const { day, month, year } = splitDate(birthday);

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

  const v2k = v2;
  const v4k = prepareData(v9 + v2k);
  const vkz1 = v11;
  const vkz2 = prepareData(v9 + v10 + v11);
  const vpr1 = v13;
  const vpr2 = prepareData(v6 + v8);
  const vpr3 = v14;

  const vb = prepareData(v2 + v4);
  const vc = prepareData(v2 + v5);
  const vd = prepareData(v3 + v5);
  const ve = prepareData(v4 + v6);
  const vf = prepareData(v5 + v6);
  const vh = prepareData(va + ve);

  const vg1 = prepareData(vc + vd);
  const vg2 = prepareData(vb + vf);
  const vi = prepareData(vg1 + vg2);

  const vMinus = prepareData(v4 + vb);
  const vPlus = prepareData(v5 + vc);
  const v4c = prepareData(v4 + vc);
  const v5b = prepareData(v5 + vb);

  const vFieldY = prepareData(v1 + v31);
  const vFieldYMinus = prepareData(vFieldY + v1);
  const vFieldYPlus = prepareData(vFieldY + v31);

  const vFieldA = prepareData(v2 + v31);
  const vFieldAMinus = prepareData(vFieldA + v2);
  const vFieldAPlus = prepareData(vFieldA + v31);

  const vFieldO = prepareData(v3 + v31);
  const vFieldOMinus = prepareData(vFieldO + v3);
  const vFieldOPlus = prepareData(vFieldO + v31);

  return [
    { id: 1, value: v1 },
    { id: 2, value: v2 },
    { id: 3, value: v3 },
    { id: 4, value: v4 },
    { id: 5, value: v5 },
    { id: 6, value: v6 },
    { id: 7, value: v7 },
    { id: 8, value: v8 },
    { id: 9, value: v9 },
    { id: 10, value: v10 },
    { id: 11, value: v11 },
    { id: 12, value: v12 },
    { id: 13, value: v13 },
    { id: 14, value: v14 },
    { id: 15, value: v15 },
    { id: 16, value: v16 },
    { id: 17, value: v17 },
    { id: 18, value: v18 },
    { id: 19, value: v19 },
    { id: 20, value: v20 },
    { id: 21, value: v21 },
    { id: 30, value: v30 },
    { id: 31, value: v31 },
    { id: 32, value: v32 },
    { id: 33, value: v33 },
    { id: 34, value: v34 },
    { id: 35, value: v35 },
    { id: "2k", value: v2k },
    { id: "4k", value: v4k },
    { id: "kz1", value: vkz1 },
    { id: "kz2", value: vkz2 },
    { id: "pr1", value: vpr1 },
    { id: "pr2", value: vpr2 },
    { id: "pr3", value: vpr3 },
    { id: "a", value: va },
    { id: "b", value: vb },
    { id: "c", value: vc },
    { id: "d", value: vd },
    { id: "e", value: ve },
    { id: "f", value: vf },
    { id: "h", value: vh },
    { id: "g1", value: vg1 },
    { id: "g2", value: vg2 },
    { id: "i", value: vi },
    { id: "minus", value: vMinus },
    { id: "plus", value: vPlus },
    { id: "4c", value: v4c },
    { id: "5b", value: v5b },
    { id: "fieldY", value: vFieldY },
    { id: "fieldYMinus", value: vFieldYMinus },
    { id: "fieldYPlus", value: vFieldYPlus },
    { id: "fieldA", value: vFieldA },
    { id: "fieldAMinus", value: vFieldAMinus },
    { id: "fieldAPlus", value: vFieldAPlus },
    { id: "fieldO", value: vFieldO },
    { id: "fieldOMinus", value: vFieldOMinus },
    { id: "fieldOPlus", value: vFieldOPlus }
  ];
}
