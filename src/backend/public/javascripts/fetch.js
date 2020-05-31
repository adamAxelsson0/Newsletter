export async function GetAdmins() {
    const response = await fetch("http://localhost:4000/api/admins");
    return await response.json();
}
export async function GetUsers() {
    const response = await fetch("http://localhost:4000/api/users");
    return await response.json();
}