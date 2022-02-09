import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import SimpleCard from "../components/SimpleCard";

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

export default function Home() {
  return (
    <>
      <Navbar />
           
      <Hero />

      <div className="container max-w-7xl px-5 mx-auto">
        <h2 className="text-4xl font-bold text-gray-800">Popular Items Right Now</h2>
        <br /> <hr /> <br />
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.id} name={product.name} href={product.href} imageSrc={product.imageSrc} price={product.price} />
          ))}
        </div>
      </div>

      {/* <FeaturedItems />
      <FeaturedItems isReversed={true} /> */}
      <Newsletter />

      <div className="container max-w-7xl px-5 mx-auto">
        <h2 className="text-4xl font-bold text-gray-800">Latest products</h2>
        <br /> <hr /> <br />
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.id} name={product.name} href={product.href} imageSrc={product.imageSrc} price={product.price} />
          ))}
        </div>
      </div>

      <div className="container mt-16 max-w-7xl px-5 mx-auto">
        <h2 className="text-4xl font-bold text-gray-800">Top Sellers</h2>
        <br /> <hr /> <br />
        <div className="flex flex-wrap justify-between gap-y-3">
          <SimpleCard />
          <SimpleCard />
          <SimpleCard />
          <SimpleCard />
          <SimpleCard />
          <SimpleCard />
        </div>
      </div>


      <Footer />

    </>
  )
}
