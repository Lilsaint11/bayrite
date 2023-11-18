import { client } from '../utils/configSanity';
//const sanity = require('@sanity/client');

const client = createClient({
    projectId: '36sufk7u',
    dataset: 'production',
    apiVersion: '2021-10-21',
    useCdn: true,
    token:"skzlDH6KZYu7pv1ELfosRqMPavRuhoiNwVJD55uRvYbQirIWY3eUpSBHgRNIXRhXQdG0E2Tn0j8QznwNTzGCQwpee4m05OJpBWvoZVn6MVzKy1d1QM0Ij4cURAAZxaD6iNmRPAC8YoseFh7b1yP49sPmOOMPi4KDRHZjNdIHiDeBbNjWl6ZR"
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