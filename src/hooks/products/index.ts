import { useQuery } from "@tanstack/react-query";

const baseURL = process.env.NEXT_PUBLIC_API_URL ?? "https://fakestoreapi.com";

const getProductsPath = "/products";

export type Product = {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
};

const getAllProducts = async () => {
  const res = await fetch(`${baseURL}${getProductsPath}`);
  if (!res.ok) {
    throw new Error('Error fetching products');
  }
  return res.json();
};

export const useProducts = () => {
  return useQuery({
    queryKey: [getProductsPath],
    queryFn: getAllProducts,
  });
};
