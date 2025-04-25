import Image from "next/image";
import styles from "./page.module.css";
import ProductList from "@/components/user/productList/ProductList";
import BestSellerProducts from "@/components/user/bestSellerProducts/BestSellerProducts";
import CategoryList from "@/components/user/categoryList/CategoryList";

export default function Home() {
  return (
    <div>
      <CategoryList />
      <BestSellerProducts />


    </div>
  );
}
