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
    <div className="min-h-screen flex flex-col items-center py-8 px-4 md:px-8">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
        {/* Header Section */}
        <div className="bg-gray-700 text-white py-6 px-6 sm:px-8">
          <h1 className="text-3xl font-extrabold mb-4 text-center sm:text-left">
            {t('numerology.calculator.title', 'Нумерологічний Калькулятор')}
          </h1>
          <div className="flex justify-center sm:justify-start">
            <DatePicker
              selected={birthday}
              onChange={handleDateChange}
            />
          </div>
        </div>

        {/* Results Section */}
        <div className="p-6 sm:p-8 max-w-2xl mx-auto">
          {isCalculated && data.length > 0 ? (
            <CalculationResults data={data} />
          ) : (
            <div className="text-center text-gray-800 py-12">
              <p className="text-lg">
                {t('numerology.calculator.selectDate', 'Оберіть дату народження для розрахунку')}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
