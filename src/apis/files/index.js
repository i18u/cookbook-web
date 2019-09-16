import axios from 'axios';

const instance = axios.create({
	baseURL: "http://localhost:8080/api/",
	timeout: 5000,
});

const sleep = function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

const MockApi = {
	async get() {
		await sleep(2000);
		
		return [];
	}
};

const Files = {
	create(ingredient) {
		return instance.post('/files', ingredient)
	},
	get(fileId) {
		return instance.get('/files', fileId);
	}
};

export {
	Files,
	MockApi
};