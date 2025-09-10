import React from "react";
import { FaInstagram } from "react-icons/fa";

export default function SubscribeOffer() {
  return (
    <div className="text-center p-10">
      {/* Title */}
      <h1 className="text-3xl font-bold">Get 10% Off on Your First Order</h1>
      <p className="text-gray-600 mt-2">
        Plus exclusive access to product drops, style tips, and insider deals.
      </p>

      {/* Email Input */}
      <div className="mt-5 flex justify-center gap-2">
        <input
          type="email"
          placeholder="Enter your email *"
          className="border rounded-md px-4 py-2 w-64 hover:border-red-500"
        />
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold px-6 py-2 rounded-md">
          SUBSCRIBE
        </button>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10  " >
        <img
          src="public/card/order/card1.png"
          alt="Fashion 1"
          className="rounded-md object-fit-cover"

        />
        <img
          src="public/card/order/card2.png"
          alt="Fashion 2"
          className="rounded-md object-fit-cover"
        />
        <img
          src="public/card/order/card3.png"
          alt="Fashion 3"
          className="rounded-md object-fit-cover"
        />
        <img
          src="public/card/order/card4.png"
          alt="Fashion 4"
          className="rounded-md object-fit-cover"
        />
      </div>
      

        <div className="font-bold w-full">
        <div className=""><FaInstagram /><p> Follow us @VeloraStyle</p></div>
         
        </div>
      </div>
   
  );
}
