/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  if (options.method === 'GET') {
    const url = new URL(options.url);
    let keys = Object.keys(options.data);
    for (let key of keys) {
      url.searchParams.set(key, options.data[key]);
    }

    xhr.open('GET', url);
  } else {
    const formData = formData = new FormData();

    let keys = Object.keys(options.data);
    
    for(let key of keys) {
      formData.append(key, options.data[key]);
    }

    xhr.open('POST', options.url);
  }

  xhr.load = function(event) {

    try {
      xhr.send(formData);
      callback(null, xhr.response);

    } catch(error) {
      callback(error, null);

    }
  }
};
