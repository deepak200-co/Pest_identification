import React from 'react';

const PredictionResult = ({ result }) => {
  const renderResult = () => {
    if (result) {
      const { pest, pesticides, fertilizers, precautions } = result;

      return (
        <div>
          <h2>Prediction Result</h2>
          <p>
            The identified pest is: <strong>{pest}</strong>
          </p>
          <p>
            Recommended Pesticides: <strong>{pesticides}</strong>
          </p>
          <p>
            Recommended Fertilizers: <strong>{fertilizers}</strong>
          </p>
          <p>
            Precautions: <strong>{precautions}</strong>
          </p>
        </div>
      );
    } else {
      return <p>No result available.</p>;
    }
  };

  return <div>{renderResult()}</div>;
};

export default PredictionResult;
