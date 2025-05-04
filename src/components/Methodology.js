import React from 'react';

function Methodology() {
  return (
    <div className="p-6 bg-pink-50 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-pink-700 mb-4">Our Motivation</h2>
      <p className="text-gray-700 text-lg mb-6">
        We aim to empower individuals and healthcare professionals with tools to assist in early detection and diagnosis of breast cancer using cutting-edge AI and machine learning technologies.
      </p>

      <div className="flex justify-center items-center space-x-8 mb-8">
        <span className="text-gray-700 text-lg">Start →</span>

        {/* Circle layout for images */}
        <div className="flex items-center justify-center space-x-4">
          {/* Image 1 */}
          <div className="circle-image" style={{ backgroundImage: "url('/images/photo1.jpg')" }}></div>
            <p className="text-center text-sm mt-2">Image 1</p>

          {/* Image 2 */}
          <div className="circle-image" style={{ backgroundImage: "url('/images/photo1.jpg')" }}></div>
            <p className="text-center text-sm mt-2">Image 2</p>

          {/* Image 3 */}
          <div className="circle-image" style={{ backgroundImage: "url('/images/photo1.jpg')" }}></div>
            <p className="text-center text-sm mt-2">Image 3</p>
    

          {/* Image 4 */}
          <div className="circle-image" style={{ backgroundImage: "url('/images/photo1.jpg')" }}></div>
            <p className="text-center text-sm mt-2">Image 4</p>
    
        </div>

        <span className="text-gray-700 text-lg">→ Final Result</span>
      </div>
    </div>
  );
}

export default Methodology;
