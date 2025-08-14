export interface DateParts {
  day: number;
  month: number;
  year: number;
}

export interface NumerologyResult {
  position: string;
  value: number;
  displayName: string;
  description: string;
}

export const splitDate = (date: Date): DateParts => {
  const day = date.getDate();
  const month = date.getMonth() + 1; // getMonth() returns 0-11
  const year = date.getFullYear();

  return { day, month, year };
};

export function calculateLifePath(birthDate: Date): number {
  const day = birthDate.getDate();
  const month = birthDate.getMonth() + 1;
  const year = birthDate.getFullYear();

  return reduceToSingleDigit(day + month + year);
}

function reduceToSingleDigit(num: number): number {
  while (num > 9 && num !== 11 && num !== 22 && num !== 33) {
    num = num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
  }
  return num;
}

/**
 * Get position display name with fallback
 */
export const getPositionDisplayName = (
  id: string,
  t: (key: string) => string
): string => {
  return t(`positions.${id}`);
};

/**
 * Convert number to Roman numerals
 */
export const romanize = (num: number): string => {
  if (num <= 0) return '';

  const values = [
    1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1
  ];
  const numerals = [
    'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'
  ];

  let result = '';
  let remaining = num;

  for (let i = 0; i < values.length; i++) {
    while (remaining >= values[i]) {
      result += numerals[i];
      remaining -= values[i];
    }
  }

  return result;
};

/**
 * Format date to YYYY-MM-DD string
 */
export const formatDateForInput = (date: Date | null): string => {
  if (!date) return '';
  return date.toISOString().split('T')[0];
};

/**
 * Parse date from YYYY-MM-DD string
 */
export const parseDateFromInput = (dateString: string): Date | null => {
  if (!dateString) return null;
  const date = new Date(dateString);
  return isNaN(date.getTime()) ? null : date;
};

/**
 * Get readable date format
 */
export const formatDateReadable = (date: Date | null, locale: string = 'uk-UA'): string => {
  if (!date) return '';

  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

/**
 * Validate if date is valid for numerology calculation
 */
export const isValidBirthday = (date: Date | null): boolean => {
  if (!date) return false;

  const now = new Date();
  const hundredYearsAgo = new Date(now.getFullYear() - 150, 0, 1);

  return date <= now && date >= hundredYearsAgo;
};
