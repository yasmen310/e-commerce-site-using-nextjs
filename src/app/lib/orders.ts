export async function getOrderHistory() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", { cache: "no-store" });

    if (!res.ok) {
      throw new Error(`Failed to fetch orders. Status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching order history:", error);
    return [];
  }
}
