import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Hero from "../components/Hero";
import ProductCollection from "../components/ProductCollection";
import StoreCard from "../components/StoreCard";
import StoreCollection from "../components/StoreCollection";

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 3,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 4,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },

]

const stores = [
  {
    id: 1, 
    name: 'Alapsis UIs', 
    href: '#',
    sellerName: 'Mars Twin',
    bannerImageSrc: 'https://dummyimage.com/300x200',
    storeImageSrc: 'https://dummyimage.com/200x200',
    rating: '4.6', 
    products: '45', 
    sells: '342'
  }, 
  {
    id: 2, 
    name: 'Alapsis UIs', 
    href: '#',
    sellerName: 'Mars Twin',
    bannerImageSrc: 'https://dummyimage.com/300x200',
    storeImageSrc: 'https://dummyimage.com/200x200',
    rating: '4.6', 
    products: '45', 
    sells: '342'
  }, 
  {
    id: 3, 
    name: 'Alapsis UIs', 
    href: '#',
    sellerName: 'Mars Twin',
    bannerImageSrc: 'https://dummyimage.com/300x200',
    storeImageSrc: 'https://dummyimage.com/200x200',
    rating: '4.6', 
    products: '45', 
    sells: '342'
  }, 
  {
    id: 4, 
    name: 'Alapsis UIs', 
    href: '#',
    sellerName: 'Mars Twin',
    bannerImageSrc: 'https://dummyimage.com/300x200',
    storeImageSrc: 'https://dummyimage.com/200x200',
    rating: '4.6', 
    products: '45', 
    sells: '342'
  }
]

export default function Home() {
  return (
    <>
      <Navbar />
           
      <Hero />

      <ProductCollection title="Trending Products" products={products} />

      <StoreCollection title="Featured Stores" stores={stores} />

      <ProductCollection title="Latest" products={products} />
      <Newsletter />
      

      <Footer />

    </>
  )
}
