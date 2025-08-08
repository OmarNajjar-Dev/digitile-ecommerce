import ProductCard from "@/features/products/components/product-card/ProductCard";

function page() {
  return (
    <div>
      <ProductCard
        id="1"
        name="Sample Product"
        image="/images/example.webp"
        price={29.99}
        currency="USD"
        description="This is a sample product description."
        oldPrice={39.99}
      />
      {/* Add more ProductCard components as needed */}
    </div>
  );
}

export default page;
