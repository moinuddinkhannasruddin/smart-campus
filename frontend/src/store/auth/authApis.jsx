const authApis = {};
const baseUrl = "http://localhost:9000/api"

authApis.login = async (payload) => {
    const res = await fetch("/v1/auth/login", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "content-type": "application/json",
        },
    });
    const result = await res.json();
    return result;
};

export { authApis };