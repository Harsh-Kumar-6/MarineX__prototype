import React, { useState } from 'react';
import FileUpload from './Fileupload';
import LocationInput from './Location';
import FormButtons from './Formbuttons';

interface FormData {
  hazardType: string;
  severity: string;
  description: string;
  location: string;
  file: File | null;
}

const hazardTypes = [
  'Select Hazard Type',
  'Earthquake',
  'Flood',
  'Wildfire',
  'Tornado'
];

const severityLevels = [
  { value: '', label: 'Select Severity' },
  { value: 'low', label: 'Low (Green)' },
  { value: 'moderate', label: 'Moderate (Yellow)' },
  { value: 'high', label: 'High (Orange)' },
  { value: 'severe', label: 'Severe (Red)' }
];

const HazardForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    hazardType: '',
    severity: '',
    description: '',
    location: '',
    file: null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, file }));
  };

  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setFormData(prev => ({
            ...prev,
            location: `${latitude}, ${longitude}`
          }));
        },
        () => alert('Unable to retrieve your location')
      );
    } else {
      alert('Geolocation is not supported by this browser');
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Hazard report submitted successfully!');
  };

  const handleCancel = () => {
    setFormData({
      hazardType: '',
      severity: '',
      description:'',
      location: '',
      file: null
    });
  };

  return (
    <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
     
      <div>
        <label htmlFor="hazardType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Hazard Type
        </label>
        <select
          id="hazardType"
          name="hazardType"
          value={formData.hazardType}
          onChange={handleInputChange}
          className="w-full rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 px-3 py-2"
          required
        >
          {hazardTypes.map((type, index) => (
            <option key={index} value={index === 0 ? '' : type} disabled={index === 0}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="severity" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Severity
        </label>
        <select
          id="severity"
          name="severity"
          value={formData.severity}
          onChange={handleInputChange}
          className="w-full rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 px-3 py-2"
          required
        >
          {severityLevels.map((level, index) => (
            <option key={index} value={level.value} disabled={index === 0}>
              {level.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Enter detailed description of the hazard..."
          rows={4}
          className="w-full rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 px-3 py-2"
          required
        />
      </div>

      <FileUpload file={formData.file} onChange={handleFileChange} />
      

      <LocationInput
        location={formData.location}
        onChange={handleInputChange}
        onGetCurrentLocation={handleCurrentLocation}
      />

      <FormButtons onCancel={handleCancel} onSubmit={handleSubmit} />
    </form>
  );
};

export default HazardForm;

