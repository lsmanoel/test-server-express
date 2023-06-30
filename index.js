const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Home Page Route'));

app.get('/string', (req, res) => res.send('Essa é uma String'));

app.get('/json', (req, res) => {
  res.json({
    name: 'Sensor 1',
    model: 'HF+',
  });
});

app.get('/json-array', (req, res) => {
  res.json([
    {
      name: 'Sensor 1',
      model: 'HF+',
    },
    {
      name: 'Sensor 2',
      model: 'TcAs',
    },
  ]);
});

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`Server running on ${port}, http://localhost:${port}`)
);
