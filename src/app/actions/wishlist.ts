"use server";

export async function addToWishlist(productId: number) {
  try {
    console.log(`Added product ${productId} to wishlist`);
    return { success: true };
  } catch (error) {
    console.error("Error adding to wishlist:", error);
    return { success: false };
  }
}
