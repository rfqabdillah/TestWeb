import axios from 'axios';

const BASE_URL = 'http://37.44.244.19/api_master/api';

export const getPerusahaan = () =>
  axios.post(BASE_URL, {
    act: 'latihan-perusahaan',
  });

export const getDetailPerusahaan = (id) =>
  axios.post(BASE_URL, {
    act: 'latihan-perusahaan',
    key: id,
  });

export const createPerusahaan = (data) =>
  axios.post(BASE_URL, {
    act: 'latihan-perusahaan',
    record: data,
  });

export const updatePerusahaan = (id, data) =>
  axios.put(BASE_URL, {
    act: 'latihan-perusahaan',
    key: id,
    record: data,
  });

export const deletePerusahaan = (id) =>
  axios.delete(BASE_URL, {
    data: {
      act: 'latihan-perusahaan',
      key: id,
    },
  });
