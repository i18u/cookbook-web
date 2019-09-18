import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080/api/',
  timeout: 10000,
});

const sleep = function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const MockApi = {
  async get() {
    await sleep(2000);

    return [];
  },
};

const IngredientApi = {
  save(ingredient) {
    return instance.post('/ingredient', ingredient);
  },
};

export {
  IngredientApi,
  MockApi,
};
