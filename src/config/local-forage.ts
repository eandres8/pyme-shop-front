import localforage from 'localforage';

localforage.config({
  name: 'MyPymeDB',
  storeName: 'pyme_shopt',
});

export default localforage;
