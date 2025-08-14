'use client';

import { useTranslation } from 'react-i18next';
import { useNumerologyStore } from '@/stores/numerology';
import { calculateNumerology } from '@/lib/numerology/calculations';
import DatePicker from '@/components/numerology/DatePicker';
import CalculationResults from '@/components/numerology/CalculationResults';

export default function NumerologyCalculatorPage() {
  const { t } = useTranslation();
  const {
    birthday,
    data,
    isCalculated,
    setBirthday,
    setData
  } = useNumerologyStore();

  const handleDateChange = (date: Date | null) => {
    setBirthday(date);
    if (date) {
      const results = calculateNumerology(date);
      setData(results);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-teal-400 text-white py-4 px-8">
        <h1 className="text-2xl font-bold mb-4">
          {t('numerology.calculator.title', 'Нумерологічний Калькулятор')}
        </h1>
        <DatePicker
          selected={birthday}
          onChange={handleDateChange}
        />
      </div>

      {/* Results Section */}
      <div className="px-8 py-6">
        {isCalculated && data.length > 0 ? (
          <CalculationResults data={data} />
        ) : (
          <div className="text-center text-gray-500 py-12">
            <p className="text-lg">
              {t('numerology.calculator.selectDate', 'Оберіть дату народження для розрахунку')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
