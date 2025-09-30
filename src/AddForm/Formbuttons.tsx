import React from 'react';

interface FormButtonsProps {
  onCancel: () => void;
  onSubmit: () => void;
}

const FormButtons: React.FC<FormButtonsProps> = ({ onCancel, onSubmit }) => {
  return (
    <div className="flex justify-end gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
      <button
        type="button"
        onClick={onCancel}
        className="px-5 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-900"
      >
        Cancel
      </button>
      <button
        type="button"
        onClick={onSubmit}
        className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
      >
        Submit Report
      </button>
    </div>
  );
};

export default FormButtons;
