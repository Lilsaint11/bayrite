const sanity = require('@sanity/client');

const client = new sanity({
  projectId: 'YOUR_PROJECT_ID',
  dataset: 'YOUR_DATASET',
  useCdn: false,
  token: 'YOUR_TOKEN',
});

const documents = [
  {
    _type: 'zodiacs',
    name: 'My first post',
    price: '5000',
  },
  {
    _type: 'zodiacs',
    name: 'My second post',
    price: '8000',
  },
];

client
  .create(documents)
  .then(() => {
    console.log('Documents created successfully.');
  })
  .catch((error) => {
    console.log(error);
  });