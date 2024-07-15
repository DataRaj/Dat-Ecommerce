import ProductDetailCard from "@/components/product/ProductDetailCard";
import ProductsMarqueeWrapper from "@/components/product/ProductsMarqueeWrapper";
import { Product } from "@/lib/types";
import { urlForImage } from "@/sanity/lib/image";
import { getProductBySlug, getProductsSlug } from "@/sanity/lib/sanity.query";
import type { Metadata } from "next";

export const dynamicParams = false;

type Props = {
  params: { productSlug: string };
};

type ProductSlug = {
  slug: {
    current: string;
  };
};

export async function generateStaticParams() {
  const productSlugs = await getProductsSlug();
  return productSlugs.map((productSlug: ProductSlug) => {
    return {
      productSlug: productSlug.slug.current,
    };
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product: Product = await getProductBySlug(params.productSlug);
  console.log("🚀 ~ file: page.tsx ~ line 64 ~ generateMetadata ~ product", product);
  return {
    title: product.name,
    alternates: {
      canonical: `/product/${params.productSlug}`,
    },
    description: product.features,
  };
}

const ProductPage = async ({ params }: Props) => {
  const product: Product = await getProductBySlug(params.productSlug);
  console.log("🚀 ~ file: page.tsx ~ line 76 ~ ProductPage ~ product", product);
  const jsonLd = {
    "@context": "", //https://www.oxabags.com/
    "@type": "Product",
    name: product.name,
    image: urlForImage(product.images[0]),
    description: product.features,
    brand: {
      "@type": "Brand",
      name: "Shiven-Ecom",
    },
  };

  return (
    <div className="px-2">
      <ProductDetailCard product={product} />
      <ProductsMarqueeWrapper />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
};

export default ProductPage;
