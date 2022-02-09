import Footer from '../components/Footer';
import Navbar from '../components/Navbar'

import { ChevronRightIcon } from '@heroicons/react/solid';

export default function dashboard() {
    return (
        <>
            <Navbar />



            {/* Overall Data */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-12 mx-auto">

                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                    <path d="M8 17l4 4 4-4m-4-5v9"></path>
                                    <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                                </svg>
                                <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                                <p className="leading-relaxed">Total Sales</p>
                                <br />
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                                </svg> */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-indigo-500 w-12 h-12 mb-3 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                                <h2 className="title-font font-medium text-3xl text-gray-900">4.5</h2>
                                <p className="leading-relaxed">Average Rating</p>
                                <br />
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                    <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                                    <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                                </svg> */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-indigo-500 w-12 h-12 mb-3 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                                </svg>
                                <h2 className="title-font font-medium text-3xl text-gray-900">$74k</h2>
                                <p className="leading-relaxed">Total Earning</p>
                                <br />
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                </svg> */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-indigo-500 w-12 h-12 mb-3 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <h2 className="title-font font-medium text-3xl text-gray-900">$46k</h2>
                                <p className="leading-relaxed">Withdrawable Amount</p>
                                <a href='#' className="leading-relaxed text-purple-500 hover:underline">Withdraw</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End of Overall Data */}

            {/* Products table */}

            <div className="container mx-auto px-5 mt-10 mb-24 flex flex-col">
                <div className="overflow-x-auto shadow-md sm:rounded-lg">
                    <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden ">
                            <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                                <thead className="bg-gray-100 dark:bg-gray-700">
                                    <tr>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Product Name
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Sales
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Price
                                        </th>
                                        <th scope="col" className="p-4">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                        <th scope="col" className="p-4">
                                            <span className="sr-only">Delete</span>
                                        </th>

                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Next.js template portfolio</td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">44</td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">$19</td>
                                        <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                            <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                        </td>
                                        <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                            <a href="#" className="text-red-600 dark:text-blue-500 hover:underline">Delete</a>
                                        </td>

                                    </tr>
                                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple MacBook Pro 17"</td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">3</td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">$2999</td>

                                        <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                            <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                        </td>
                                        <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                            <a href="#" className="text-red-600 dark:text-blue-500 hover:underline">Delete</a>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">iPhone 13 Pro</td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">21</td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">$999</td>
                                        <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                            <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                        </td>
                                        <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                            <a href="#" className="text-red-600 dark:text-blue-500 hover:underline">Delete</a>
                                        </td>

                                    </tr>
                                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple Magic Mouse 2</td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">34</td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">$99</td>
                                        <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                            <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                        </td>
                                        <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                            <a href="#" className="text-red-600 dark:text-blue-500 hover:underline">Delete</a>
                                        </td>

                                    </tr>
                                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple Watch Series 7</td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">78</td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">$599</td>
                                        <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                            <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                        </td>
                                        <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                            <a href="#" className="text-red-600 dark:text-blue-500 hover:underline">Delete</a>
                                        </td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* End of Products table */}
            <Footer />
        </>
    );
}
