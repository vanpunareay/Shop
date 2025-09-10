import React from 'react'

export default function Bestseller() {
    return (
        <>
            <div className='py-20 w-full justify-center'>
                <div className='md:text-[25px] lg:tex-[25px] ' >
                    <div>
                        <h1 className='text-center text-[40px] font-bold'>BestSeller</h1>
                        <p className='md:text-[25px] lg:[text] w-[60%] text-center '>From cult-favorite jackets to must-have dresses – These are our customer faves.</p>
                    </div>
                </div>
            </div>
            <div className="w-full mt-10 grid grid-cols-2 md:grid-cols-3 gap-2">
                <div className="my-3 ">
                    <div>   
                        <img src="public/card/card4.png" alt="" className="w-full object-cover" />
                    </div>
                    <div className="pt-3 ">
                        <h1 className="text-[18px] font-medium">Flowline Dresses</h1>
                        <p className="text-gray-600 mt-2">woman</p>
                        <p className="text-sm font-bold text-green-600">$200.00 - $ 300.00</p>
                    </div>
                    <ul className="py-3 w-[70%] md:w-[45%] lg:w-[30%] flex justify-between">
                        <li className="border-2 px-2 py-1 rounded-md">M</li>
                        <li className="border-2 px-2 py-1 rounded-md">L</li>
                        <li className="border-2 px-2 py-1 rounded-md">XL</li>
                    </ul>
                </div>
                <div className="my-3 ">
                    <div>
                        <img src="public/card/card5.png" alt="" className="w-full object-cover" />
                    </div>
                    <div className="pt-3 ">
                        <h1 className="text-[18px] font-medium">Flowline Dresses</h1>
                        <p className="text-gray-600 mt-2">woman</p>
                        <p className="text-sm font-bold text-green-600">$200.00 - $ 300.00</p>
                    </div>
                    <ul className="py-3 w-[70%] md:w-[45%] lg:w-[30%] flex justify-between">
                        <li className="border-2 px-2 py-1 rounded-md">M</li>
                        <li className="border-2 px-2 py-1 rounded-md">L</li>
                        <li className="border-2 px-2 py-1 rounded-md">XL</li>
                    </ul>
                </div>
                 <div className="my-3">
                    <div>
                        <img src="public/card/card6.png" alt="" className="w-full object-cover" />
                    </div>
                    <div className="pt-3 ">
                        <h1 className="text-[18px] font-medium">Flowline Dresses</h1>
                        <p className="text-gray-600 mt-2">woman</p>
                        <p className="text-sm font-bold text-green-600">$200.00 - $ 300.00</p>
                    </div>
                    <ul className="py-3 w-[70%] md:w-[45%] lg:w-[30%] flex justify-between">
                        <li className="border-2 px-2 py-1 rounded-md">M</li>
                        <li className="border-2 px-2 py-1 rounded-md">L</li>
                        <li className="border-2 px-2 py-1 rounded-md">XL</li>
                    </ul>
                </div>
                
            </div>

        </>
    )
}
