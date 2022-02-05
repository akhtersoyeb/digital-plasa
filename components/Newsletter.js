
export default function Newsletter() {
    return (
        <div className="my-20 container mx-auto px-4 py-10 border border-slate-200 rounded-lg shadow-md shadow-slate-300/50">
            <h1 className="text-3xl font-semibold text-center sm:text-left">
                Want product news and updates?
            </h1>
            <h1 className="text-3xl font-semibold text-indigo-600 text-center sm:text-left">
                Sign up for our newsletter.
            </h1>
            <div className="pt-5 flex flex-col sm:flex-row gap-3 max-w-sm mx-auto sm:max-w-none">
                <input
                    className="border border-slate-200 appearance-none focus:outline-indigo-500 md:w-2/5 rounded-md px-4 py-2 text-gray-600"
                    placeholder="email address"
                    type="text"
                />
                <button className="bg-indigo-600 text-white py-2 px-4 rounded-md">
                    Notify me
                </button>
            </div>
        </div>
    );
}
