import StoreCard from "./StoreCard";


export default function StoreCollection({ title, stores }) {

    return (
        <div className="container max-w-7xl mx-auto px-2 my-6">
            <h2 className="text-4xl font-bold text-gray-800">{title}</h2>
            <br /> <hr /> <br />
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {stores.map((store) => (
                    <StoreCard key={store.id} name={store.name} href={store.href} bannerImageSrc={store.bannerImageSrc} storeImageSrc={store.storeImageSrc} sellerName={store.sellerName} rating={store.rating} products={store.products} sells={store.sells} />
                ))}
            </div>
        </div>
    )
}
