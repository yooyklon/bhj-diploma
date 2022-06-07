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
    const formData = new FormData();

    let keys = Object.keys(options.data);
    
    for(let key of keys) {
      formData.append(key, options.data[key]);
    }

    xhr.open('POST', options.url);
  }

  xhr.onload = function() {
    options.callback(null, xhr.response);
  }
  
  try {
    xhr.send(formData);
  } catch(error) {
    options.callback(error, null);
  }
};
