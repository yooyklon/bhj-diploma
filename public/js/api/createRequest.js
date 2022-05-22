/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
 const xhr = new XMLHttpRequest();
 xhr.responseType = 'json';

 if (options.method === 'GET') {
  const url = new URL(options.url);

  url.searchParams.set('mail', options.email);
  url.searchParams.set('password', options.password);

  xhr.open('GET', url);
 } else {
  const formData = formData = new FormData();
  formData.append('mail', options.email);
  if (options.password) {
   formData.append('password', options.password);
  }

  xhr.open('POST', options.url);
 }

 try {
  xhr.send(formData);
  callback(null, xhr.response);

 } catch(error) {
  callback(error, null);

 }
};
