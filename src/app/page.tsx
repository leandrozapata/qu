"use client";
import styles from "./page.module.css";
import { Product, useProducts } from "../hooks/products";
import Card from "../components/molecules/Card";
import Logo from "../components/molecules/Logo";
import { SetStateAction, useState } from "react";
import CategoryPills from "@/components/molecules/CategoryPills";
import Title from "@/components/molecules/Title";
import CardSkeleton from "@/components/molecules/CardSkeleton";
import ErrorComponent from "@/components/molecules/NetworkError";

const CATEGORIES = [
  "all",
  "men's clothing",
  "jewelery",
  "electronics",
  "women's clothing",
];

export default function Home() {
  const { data: products, error, isLoading } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategorySelect = (category: SetStateAction<string>) => {
    setSelectedCategory(category);
  };

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products?.filter(
          (product: Product) => product.category === selectedCategory
        );

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Logo />
      </div>
      <Title text="Welcome to the Fake Store" />
      <CategoryPills
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
      />
      {error && <ErrorComponent message={error.message} />}
      <div className={styles.grid}>
        {isLoading
          ? Array(12)
              .fill(null)
              .map((_, i) => <CardSkeleton key={i} />)
          : filteredProducts?.map((product: Product) => (
              <Card key={product.id} product={product} />
            ))}
      </div>
    </main>
  );
}
