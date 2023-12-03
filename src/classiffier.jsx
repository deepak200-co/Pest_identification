
import React, { useState } from 'react';
import spinner from './Spinner-1s-200px.gif';
import PredictionResult from './PredictResult';
import axios from 'axios';


const ClassifierPage = () => {
  const [image, setImage] = useState(null);
  const [selectedClassifier, setSelectedClassifier] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSolutionMessage, setShowSolutionMessage] = useState(false);
  const [predictionResult, setPredictionResult] = useState(null); 



  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    const formData = new FormData();
formData.append('image', image);


    reader.onload = function (e) {
      setImage(e.target.result);
    };

    if (file) {
      reader.readAsDataURL(file);
      document.getElementById('classifier-dropdown').disabled = false;
    } else {
      document.getElementById('classifier-dropdown').disabled = true;
    }
  };

  const handleClassifierChange = (event) => {
    setSelectedClassifier(event.target.value);
  };
  const handlePredict = () => {
    setLoading(true);
  
    const formData = new FormData();
    formData.append('file', image);
    console.log('FormData:', formData);

    axios.post('http://localhost:3001/upload', formData)
      .then((response) => {
        console.log(response.data);

  
        setTimeout(() => {
          console.log(`Predicting with ${selectedClassifier} for image: ${image}`);
  
          const fakeBackendResponse = {
            pest: 'Ants',
            pesticides: 'Ant Killer Spray',
            fertilizers: 'All-purpose Plant Food',
            precautions: 'Avoid overwatering',
          };
  
          setPredictionResult(fakeBackendResponse);
  
          setLoading(false);
        }, 2000); 
      })
      .catch((error) => {
        console.error('Error uploading image:', error);
  
        setLoading(false);
      });
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', minHeight: '100vh', background: '#f4f4f4' }}>
      <div style={{ flex: 1, padding: '20px', textAlign: 'center' }}>
        <h1 style={{ marginBottom: '20px', color: '#333' }}>Image Upload</h1>
        <div style={{ border: '2px dashed #ccc', padding: '20px', textAlign: 'center', background: '#fff', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
          <input type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} id="upload-input" />
          <label htmlFor="upload-input" style={{ cursor: 'pointer' }}>
            {image ? (
              <img src={image} alt="Uploaded Image" style={{ maxWidth: '100%', maxHeight: '300px', borderRadius: '8px' }} />
            ) : (
              <div>
                <p style={{ color: '#888' }}>Click or drag an image here</p>
                <p style={{ color: '#888' }}>(Accepts only image files)</p>
              </div>
            )}
          </label>
        </div>
      </div>

      <div style={{ flex: 1, padding: '20px', textAlign: 'center' }}>
        <h1 style={{ marginBottom: '20px', color: '#333' }}>Classifier Options</h1>
        <select
          id="classifier-dropdown"
          value={selectedClassifier}
          onChange={handleClassifierChange}
          style={{ marginBottom: '10px', padding: '10px 100px', borderRadius: '4px', border: '1px solid #ccc' }}
          disabled={!image} // Disable the dropdown if no image is uploaded
        >
          <option value="">Select Classifier</option>
          <option value="classifier1">MobilenetV2</option>
          <option value="classifier2">Classifier 2</option>
          <option value="classifier3">Classifier 3</option>
        </select>

        <button
          onClick={handlePredict}
          disabled={!image || !selectedClassifier || loading} // Disable the Predict button based on conditions
          style={{ marginLeft: '10px', padding: '10px 20px', borderRadius: '10px', background: '#4CAF50', color: '#fff', border: 'none' }}
        >
          {loading ? 'Predicting...' : 'Predict'}
        </button>

        {loading && (
          <div style={{ marginTop: '20px' }}>
            <img
              src={spinner}
              alt="Loading Spinner"
              style={{ marginLeft: '10px', width: '100px', height: '100px' }}
            />
          </div>
        )}

        {showSolutionMessage && (
          <div style={{ marginTop: '20px', fontStyle: 'italic', color: 'green' }}>
            Solution available below. Scroll down!
          </div>
        )}
        <PredictionResult result={predictionResult}/>
      </div>

    </div>
  );
};

export default ClassifierPage;
