import ProductCard from "../components/ProductCard";


export default function ProductCollection({ title, products }) {

    return (
        <div className="container max-w-7xl mx-auto px-2">
            <h2 className="text-4xl font-bold text-gray-800">{title}</h2>
            <br /> <hr /> <br />
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {products.map((product) => (
                    <ProductCard key={product.id} name={product.name} href={product.href} imageSrc={product.imageSrc} price={product.price} />
                ))}
            </div>
        </div>
    )
}
