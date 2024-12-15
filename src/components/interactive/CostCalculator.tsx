'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface CalculatorField {
  id: string;
  label: string;
  type: 'number' | 'select';
  options?: { value: string; label: string }[];
  unit?: string;
  multiplier: number;
}

interface CostCalculatorProps {
  title?: string;
  fields: CalculatorField[];
  className?: string;
}

export default function CostCalculator({
  title = 'Cost Calculator',
  fields,
  className = '',
}: CostCalculatorProps) {
  const [values, setValues] = useState<Record<string, number>>({});
  const [showResult, setShowResult] = useState(false);

  const handleChange = (fieldId: string, value: string) => {
    setValues((prev) => ({
      ...prev,
      [fieldId]: parseFloat(value) || 0,
    }));
    setShowResult(false);
  };

  const calculateTotal = () => {
    return fields.reduce((total, field) => {
      return total + (values[field.id] || 0) * field.multiplier;
    }, 0);
  };

  return (
    <div className={`bg-white dark:bg-charcoal rounded-lg shadow-lg p-6 ${className}`}>
      <h2 className="text-2xl font-bold text-royal dark:text-gold mb-6">{title}</h2>

      <div className="space-y-4">
        {fields.map((field) => (
          <div key={field.id}>
            <label
              htmlFor={field.id}
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              {field.label}
            </label>
            <div className="relative">
              {field.type === 'select' ? (
                <select
                  id={field.id}
                  className="block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-royal dark:focus:border-gold focus:ring-royal dark:focus:ring-gold dark:bg-charcoal-light"
                  onChange={(e) => handleChange(field.id, e.target.value)}
                >
                  <option value="">Select...</option>
                  {field.options?.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : (
                <div className="flex">
                  <input
                    type="number"
                    id={field.id}
                    className="block w-full rounded-l-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-royal dark:focus:border-gold focus:ring-royal dark:focus:ring-gold dark:bg-charcoal-light"
                    onChange={(e) => handleChange(field.id, e.target.value)}
                    min="0"
                  />
                  {field.unit && (
                    <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-charcoal-light text-gray-500 dark:text-gray-400">
                      {field.unit}
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full mt-6 px-4 py-2 bg-royal dark:bg-gold text-white rounded-md shadow-md hover:bg-royal-dark dark:hover:bg-gold-dark transition-colors"
          onClick={() => setShowResult(true)}
        >
          Calculate Cost
        </motion.button>

        {showResult && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 bg-gray-50 dark:bg-charcoal-light rounded-md"
          >
            <div className="text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">Estimated Cost</p>
              <p className="text-3xl font-bold text-royal dark:text-gold">
                ₦{calculateTotal().toLocaleString()}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                *This is an estimate. Final costs may vary.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
