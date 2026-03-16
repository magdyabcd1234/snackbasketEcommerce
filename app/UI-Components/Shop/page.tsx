"use client";




import Arrivals from "@/app/JsonData/Arrivals.json";
import BestDeals from "@/app/JsonData/BestDeals.json";
import BestSales from "@/app/JsonData/BestSales.json";
import HotDeals from "@/app/JsonData/HotDeals.json";
import OrganicFood from "@/app/JsonData/OrganicFood.json";
import Recommend from "@/app/JsonData/Recommend.json";
import ShortProducts from "@/app/JsonData/ShortProducts.json";
import ProductDetails from "./ProductDetails/ProductDetails";
import Products from "./Products/Products";

type ShopPageProps = {
  searchParams: { [key: string]: string | undefined }
}

export default function ShopPage({ searchParams }: ShopPageProps) {
  const category = searchParams.category; // مثال لو في query param اسمه category
  const productId = searchParams?.id; // <--- هنا
    const allProducts =[
        ...Arrivals,
        ...BestDeals,
        ...BestSales,
        ...HotDeals,
        ...OrganicFood,
        ...Recommend,
        ...(ShortProducts?.Featured || []),
        ...(ShortProducts?.TopSelling || []),
        ...(ShortProducts?.OnSale || []),
        ...(ShortProducts?.TopRated || []),
];



  return (
    <div className="">
        {productId ? (
            <ProductDetails id={productId} products={allProducts}/>
        ): (
            <Products />
        )}
    </div>
  )
}
