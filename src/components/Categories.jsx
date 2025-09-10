export default function Categories(){
    return(
        <>
            <div className="w-full mt-10 ">
                <div className="class w-full">
                    <h1 className="text-center text-4xl font-medium py-2">Our Categories</h1>
                    <p className="text-center">Explore a wide range of styles, handpicked to suit every taste and need.</p>
                </div>
                <div className="w-full py-10 grid gap-5 md:grid-cols-2">
                    <div className="h-[270px] md:h-[300px] lg:h-[450px]  relative ">
                        <div className="w-full h-[85%] bg-black  border-2  border-black rounded-[25px] overflow-hidden">
                            <img src="public/card/card7.png" alt="" className="h-full object-cover w-full" />
                            <div className="absolute w-[90%] h-[100px] left-1/2 -translate-x-1/2 bg-white shadow-sm rounded-[25px] bottom-0">
                                <div className="flexn justify-center items-center">
                                    <h1 className="text-center my-3 text-xl font-medium">Mens Wear</h1>
                                <div className="text-center text-red-500 hover:text-black">
                                    Shop Now
                                </div>
                                </div>
                            </div>
                        </div> 
                       
                    </div>


                    <div className="h-[270px] md:h-[300px] lg:h-[450px]  relative ">
                        <div className="w-full h-[85%] bg-black  border-2  border-black rounded-[25px] overflow-hidden">
                            <img src="public/card/card8.png" alt="" className="h-full object-cover w-full" />
                            <div className="absolute w-[90%] h-[100px] left-1/2 -translate-x-1/2 bg-white shadow-sm rounded-[25px] bottom-0">
                                <div className="flexn justify-center items-center">
                                    <h1 className="text-center my-3 te  xt-xl font-medium">Womens Wear</h1>
                                <div className="text-center text-red-500 hover:text-black">
                                    Shop Now
                                </div>
                                </div>
                            </div>
                        </div> 
                       
                    </div>



                    <div className="h-[270px] md:h-[300px] lg:h-[450px]  relative ">
                        <div className="w-full h-[85%] bg-black  border-2  border-black rounded-[25px] overflow-hidden">
                            <img src="public/card/card9.png" alt="" className="h-full object-cover w-full" />
                            <div className="absolute w-[90%]  left-1/2 -translate-x-1/2 bg-white shadow-sm rounded-[25px] bottom-0">
                                <div className="flexn justify-center items-center">
                                    <h1 className="text-center my-3 text-xl font-medium">Kids Wear</h1>
                                <div className="text-center text-red-500 hover:text-black">
                                    Shop Now
                                </div>
                                </div>
                            </div>
                        </div> 
                       
                    </div>



                    <div className="h-[270px] md:h-[300px] lg:h-[450px]  relative ">
                        <div className="w-full h-[85%] bg-black  border-2  border-black rounded-[25px] overflow-hidden">
                            <img src="public/card/card10.png" alt="" className="h-full object-cover w-full" />
                            <div className="absolute w-[90%] h-[100px] left-1/2 -translate-x-1/2 bg-white shadow-sm rounded-[25px] bottom-0">
                                <div className="flexn justify-center items-center">
                                    <h1 className="text-center my-3 text-xl font-medium">Accessories</h1>
                                <div className="text-center text-red-500 hover:text-black">
                                    Shop Now
                                </div>
                                </div>
                            </div>
                        </div> 
                       
                    </div>
                </div>
            </div>
        </>
    )
}