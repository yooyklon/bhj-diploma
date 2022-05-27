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

  xhr.onload = function() {
    callback(null, xhr.response);
  }

  xhr.onerror = function() {
    callback(xhr.response.error, null);
  }
  try {
    xhr.send(formData);
  } catch(error) {
    throw error;
  }
};
