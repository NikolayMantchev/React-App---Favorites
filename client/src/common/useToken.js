export default function useToken() {
    const dekodedTokenStr = localStorage.getItem("decodedToken");
    const token = localStorage.getItem("token");
    const decodedToken = JSON.parse(dekodedTokenStr);
    return { token, decodedToken };
}
