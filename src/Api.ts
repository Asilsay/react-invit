import axios from 'axios';

const instance = axios.create({
  baseURL: `https://script.google.com/macros/s/AKfycbz9sTDowaZVTr550gg5Z8UdieWKWrWU3b5_el4zSN67zYzzcTA7IZT_J-6w_V1RjFv16A/exec`,
});

export default {
  PostTask: (data: FormData) =>
    instance({
      method: 'POST',
      url: '',
      data: data,
    }),
  GetTask: (page = 1, perPage = 50) =>
    instance({
      method: 'GET',
      url: '',
      params: {
        page, // Parameter untuk pagination
        perPage, // Jumlah data per halaman
      },
    }),
};
