
export default function SimpleCard() {
    return (
        <div className="bg-white rounded-lg border duration-100 hover:transition hover:scale-105 hover:shadow-lg overflow-hidden w-48">
            <img src="https://dummyimage.com/200x200" alt="Unable to load" className="" />
            <p className="text-center block text-xl font-medium text-gray-800 my-5">Any Name</p>
        </div>
    );
}
