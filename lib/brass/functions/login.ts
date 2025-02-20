export default async function sendLoginCode(phone: string, code: string) {
    const res = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({
            phone,
            code,
        })
    });
    return await res.json()
}
