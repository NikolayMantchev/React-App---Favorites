const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5001";
const apiSignInUrl = `${apiUrl}/user/signin`;
const apiSignUpUrl = `${apiUrl}/user/signup`;

const api = async (path, params = {}) => {
    const url = `${apiUrl}${path}`;
    const response = await fetch(url, params);
    if (!response.ok) {
        const errorBody = await response.json().catch(() => ({}));
        throw new Error(errorBody.message || `Request failed: ${response.status}`);
    }
    return await response.json();
};

const get = (path, params) =>
    api(path, {
        ...params,
        method: "GET",
        headers: {
            Accept: "application/json",
        },
    });

const apiMethod = (method) => (path, params = {}, token) =>
    api(path, {
        ...params,
        method,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });

const post = apiMethod("POST");
const put = apiMethod("PUT");
const del = apiMethod("DELETE");

export { get, post, put, del, apiSignInUrl, apiSignUpUrl };
