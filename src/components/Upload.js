import React, { useState } from 'react';

function Upload() {
  const [file, setFile] = useState(null);

  const handleUpload = (e) => {
    setFile(e.target.files[0]);
    // Add upload logic here
  };

  return (
    <div className="p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold text-pink-600 mb-4">Upload Breast Scan Image</h2>
      <input
        type="file"
        onChange={handleUpload}
        accept="image/*"
        className="border border-gray-300 rounded p-2"
      />
      {file && <p className="mt-2 text-green-600">Selected file: {file.name}</p>}
    </div>
  );
}

export default Upload;
