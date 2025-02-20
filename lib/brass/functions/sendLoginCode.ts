export default async function sendLoginCode(phone: string) {
    const res = await fetch("/api/auth/send-login-code", {
        method: "POST",
        body: JSON.stringify({
            phone,
        })
    });
    return await res.json()
}