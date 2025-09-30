import React from 'react';
import MaterialIcon from './MaterialIcon.tsx';

interface LocationInputProps {
  location: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onGetCurrentLocation: () => void;
}

const LocationInput: React.FC<LocationInputProps> = ({ location, onChange, onGetCurrentLocation }) => {
  return (
    <div>
      <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        Location
      </label>
      <div className="flex gap-4">
        <button
          type="button"
          onClick={onGetCurrentLocation}
          className="flex-shrink-0 inline-flex items-center px-4 py-2 border border-transparent text-sm font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700"
        >
          <MaterialIcon className="mr-2 -ml-1 text-base">my_location</MaterialIcon>
          Use Current Location
        </button>
        <input
          id="location"
          name="location"
          type="text"
          value={location}
          onChange={onChange}
          placeholder="Enter address or coordinates"
          className="flex-grow w-full rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 px-3 py-2"
          required
        />
      </div>
    </div>
  );
};

export default LocationInput;
