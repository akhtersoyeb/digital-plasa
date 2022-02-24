import Link from "next/link";

export default function StoreCard({ name, href, sellerName, bannerImageSrc, storeImageSrc, rating, products, sells}) {
    return (
        <Link href={href} >
        


        <div className="group relative duration-150 hover:shadow-lg hover:border">
            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                    src={bannerImageSrc}
                    alt="unable to load banner image"
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
            </div>
            <div>
                <div className="text-center -mt-10">
                    <span className="border-4 border-white rounded-full mx-auto inline-block">
                        <img className="rounded-full w-20 h-20" src={storeImageSrc} alt="store image" />
                    </span>
                </div>
                <p className="text-center font-bold">{name}</p>
                <p className="text-xs text-center mb-5">{sellerName}</p>
                <hr />
                <div className="flex justify-between px-10 py-5">
                    <div className="text-center">
                        <p className="font-bold">{products}</p>
                        <p className="text-xs">Products</p>
                    </div>
                    <div className="text-center">
                        <p className="font-bold">{rating}</p>
                        <p className="text-xs">Rating</p>

                    </div>
                    <div className="text-center">
                        <p className="font-bold">{sells}</p>
                        <p className="text-xs">Sells</p>

                    </div>
                </div>
            </div>
        </div>
        </Link>
    )
}
