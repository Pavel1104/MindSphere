'use client';

import { useTranslation } from 'react-i18next';
import { romanize } from '@/lib/numerology/utils';
import type { NumerologyData } from '@/lib/numerology/types';

interface CalculationResultsProps {
  data: NumerologyData[];
}

export default function CalculationResults({ data }: CalculationResultsProps) {
  const { t } = useTranslation();

  return (
    <div className="font-mono">
      <h2 className="text-xl font-bold mb-6 text-gray-900">
        Результати розрахунків:
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white p-4 rounded-xl shadow-md border border-gray-200 transition-all duration-300 hover:shadow-lg"
          >
            <span className="font-semibold text-gray-900 w-20 text-sm md:text-base">
              {t(`numerology.positions.${item.id}`, item.id.toUpperCase())}
            </span>
            <span className="text-right text-gray-900 text-lg font-bold w-12">
              {item.value}
            </span>
            <span className="font-normal text-gray-800 w-20 text-right text-sm md:text-base">
              {romanize(item.value)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
