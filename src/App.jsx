import React, { useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import LineChart from './LineChart';
import ModelControl from './ModelControl';
import ErrorBoundary from './ErrorBoundry';

const App = () => {
  const [predictions, setPredictions] = useState([]);
  const [data, setData] = useState({ x: [], y: [] });

  const runModel = async (inputValue) => {
    // Linear regression model setup (simplified)
    console.log("Model running!");
    const model = tf.sequential();
    model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
    model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });

    const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
    const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

    await model.fit(xs, ys, { epochs: 100 });

    const predictedValue = model.predict(tf.tensor2d([inputValue], [1, 1])).dataSync();
    const newData = {
      x: [1, 2, 3, 4, inputValue],
      y: [1, 3, 5, 7, predictedValue[0]],
    };

    setPredictions(predictedValue); // Optional, if you need this state
    setData(newData);

    console.log("Things: ", inputValue, predictedValue[0]);
    console.log("Set data to", newData);
    console.log("Model done");
  };

  // Log updated data whenever it changes
  useEffect(() => {
    console.log("Updated data: ", data);
  }, [data]);

  console.log("Here!");

  return (
    <div>
      <h1>Machine Learning Visualizer</h1>
      <ModelControl onRunModel={runModel} />
      <ErrorBoundary>
        <LineChart modelData={data} />
      </ErrorBoundary>
    </div>
  );
};

export default App;
