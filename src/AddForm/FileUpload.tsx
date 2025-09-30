import React from 'react';
import MaterialIcon from './MaterialIcon.tsx';

interface FileUploadProps {
  file: File | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ file, onChange }) => {
  return (
    <div>
      <label htmlFor="file-upload" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        Photo/Video Upload
      </label>
      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-lg hover:border-gray-400 dark:hover:border-gray-500 transition-colors">
        <div className="space-y-1 text-center">
          <MaterialIcon className="text-4xl text-gray-400">cloud_upload</MaterialIcon>
          <div className="flex text-sm text-gray-600 dark:text-gray-400">
            <label
              htmlFor="file-upload"
              className="relative cursor-pointer rounded font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
            >
              <span>Upload a file</span>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
                onChange={onChange}
                accept="image/*,video/*"
              />
            </label>
            <p className="pl-1">or drag and drop</p>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            PNG, JPG, GIF up to 10MB
          </p>
          {file && (
            <p className="text-sm text-blue-600 dark:text-blue-400">
              Selected: {file.name}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
