
import axios from "axios";

const API_URL = "https://dummyjson.com/products";

export async function getProducts() {
  const response = await axios.get(`${API_URL}?limit=6`);

  return response.data.products.map((item) => ({
    id: item.id,
    name: item.title,
    price: item.price,
    category: item.category,
  }));
}
