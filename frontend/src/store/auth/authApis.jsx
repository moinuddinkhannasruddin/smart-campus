const authApis = {};

authApis.login = async (payload) => {
    const res = await fetch("https://fakestoreapi.com/auth/login", {
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