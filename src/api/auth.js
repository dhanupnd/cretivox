export const loginAPI = async (email, password) => {
    const res = await fetch("https://dummyjson.com/user/login", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    if(res.ok) {
        const data = await res.json();
        return data;
    } else {
        throw new Error('Login failed');
    }
};