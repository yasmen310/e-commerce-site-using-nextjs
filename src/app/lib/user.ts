export async function getUserData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch user data");
  return res.json();
}
