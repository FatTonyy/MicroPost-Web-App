/**
 * !EasyHTTP Library
 * !library for making HTTP Request
 *
 * @version 2.0.0
 * @author Lord-X
 * @license MIT
 *
 * **/

class EasyHTTP {
  //? Make HTTP Get request
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }

  //? Make HTTP Post request
  async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const resData = await response.json();
    return resData;
  }

  //? Make HTTP Put(update) request
  async put(url, data) {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
  }

  //? Make HTTP DELETE Request
  async delete(url) {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      }
    });
    const resData = await "Resource Deleted....";
    return resData;
  }
}

export const http = new EasyHTTP();
