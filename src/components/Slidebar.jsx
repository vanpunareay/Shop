export default function Slidebar(){
    return(
        <>
            <div className="w-full">
               
                <div className="w-full relative">
                    <div className="lg:h-[90vh] md:h-[50vh] h-[70vh] ">
                        <img src="public/banner/slidebar.png" alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full h-full bg-black/60 absolute top-0">
                    </div>
                    <div className="lg:w-[60%] md:h-[60%] lg:h-[60%] w-[80%] h-[80%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <h1 className="lg:text-6xl text-4xl  text-center text-white font-medium ">Timeless Fashion for the Modern Wardrobe</h1>
                        <div className="lg:w-[60%]  w-[110%] absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                             <p className="lg:text-sm text-[15px] md:text-[20px]  text-center text-white">Discover timeless fashion for Men, Women, and Kids - crafted for comfort, designed for confidence.</p>
                        <div className="w-full pt-16 flex justify-center">
                            <div className="bg-red-600 text-white lg:px-10 px-5 py-3 lg:text-xl text-[17px] font-medium rounded-[25px] cursor-pointer">
                                Explore the Collection
                         </div>
                        </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </>
    )
}