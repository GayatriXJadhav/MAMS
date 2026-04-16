import axios from "axios";

const BASE_URL = " https://mams-8j7i.onrender.com/api";

const getRole = () => localStorage.getItem("role");

export const addPurchase = (data) =>
  axios.post(`${BASE_URL}/purchases`, data, {
    headers: { role: getRole() }
  });

export const transferAsset = (data) =>
  axios.post(`${BASE_URL}/transfers`, data, {
    headers: { role: getRole() }
  });

export const assignAsset = (data) =>
  axios.post(`${BASE_URL}/assignments`, data, {
    headers: { role: getRole() }
  });

export const getAssets = () =>
  axios.get(`${BASE_URL}/purchases`);