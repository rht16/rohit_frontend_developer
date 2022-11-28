import axios from 'axios';

const baseUrl = "http://localhost:3001";

const getAllCapsules = (payload) => axios.post(`${baseUrl}/get-all-capsules`, payload);

const getPagesCount = () => axios.get(`${baseUrl}/get-all-capsules-count`);

const filterCapsules = (payload) => axios.post(`${baseUrl}/get-filtered-capsules`, payload);

const getNextCapsules = (payload) => axios.post(`${baseUrl}/get-next-capsules`, payload);

export default { getAllCapsules, getPagesCount, filterCapsules, getNextCapsules }; 