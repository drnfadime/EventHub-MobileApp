const BASE_URL = 'https://dummyjson.com';

export const loginUser = async (username, password) => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password, expiresInMins: 30 })
  });
  return res.json();
};

export const getEvents = async () => {
  const res = await fetch(`${BASE_URL}/products?limit=20`);
  return res.json();
};

export const getEventById = async (id) => {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  return res.json();
};

export const searchEvents = async (q) => {
  const res = await fetch(`${BASE_URL}/products/search?q=${q}`);
  return res.json();
};

export const getMe = async (token) => {
  const res = await fetch(`${BASE_URL}/auth/me`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  return res.json();
};