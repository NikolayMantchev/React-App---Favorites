const apiUrl = "http://localhost:5001";

const api = async (path, params = {}) => {
    const url = `${apiUrl}${path}`;
    // console.log({params})
    const body = await fetch(url, params);
    return await body.json();
};

const get = (path, params) =>
    api(path, {
        ...params,
        method: "GET",
    });

const apiMethod = (method) => (path, params = {}, token) =>
    api(path, {
        ...params,
        method: method,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });

const post = apiMethod("POST");
const put = apiMethod("PUT");
const del = apiMethod("DELETE");

export { get, post, put, del };
