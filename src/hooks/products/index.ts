import LoggerService from "@/libs/logger-service";
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
  try {
    const res = await fetch(`${baseURL}${getProductsPath}`);
    return res.json();
  } catch (error: any) {
    LoggerService.logError(error);
    throw error;
  }
};

export const useProducts = () => {
  return useQuery({
    queryKey: [getProductsPath],
    queryFn: getAllProducts,
  });
};
