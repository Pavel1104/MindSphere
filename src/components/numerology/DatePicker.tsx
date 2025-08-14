'use client';

interface DatePickerProps {
  selected: Date | null;
  onChange: (date: Date | null) => void;
}

export default function DatePicker({ selected, onChange }: DatePickerProps) {
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value) {
      onChange(new Date(value));
    } else {
      onChange(null);
    }
  };

  const formatDate = (date: Date | null) => {
    if (!date) return '';
    return date.toISOString().split('T')[0];
  };

  return (
    <div className="flex items-center gap-4">
      <label className="text-white font-medium">
        Дата народження:
      </label>
      <input
        type="date"
        value={formatDate(selected)}
        onChange={handleDateChange}
        className="px-4 py-2 rounded-lg border border-gray-300 text-gray-800 focus:ring-2 focus:ring-teal-500 focus:outline-none"
      />
    </div>
  );
}
