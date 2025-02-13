import React from "react";
import Header from "./Header";

const SelectTicket = ({ setStep, setUserData, userData }) => {
  const handleSelect = (ticketType) => {
    setUserData({ ...userData, ticketType });
    setStep(2);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#033c46] text-white ">
      <Header/>
      <div className="bg-[#033c46] p-6 rounded-lg shadow-lg text-center w-96 border border-[#1a331a]">
         <h2 className="block text-start">Ticket Selection</h2>
        <div className="bg-[#041f24] h-[3px]"></div>
         <div className="bg-[#033c46] mt-6 mb-6 rounded-b-lg shadow-2xl shadow-[#1b2b2e] border border-[#1a331a] p-4 rounded-lg text-center">
        <h2 className="text-xl font-semibold mb-4">Techember Fest '25</h2>
        <p className="text-gray-400 mb-4">📍 10 Banana Road, Ikeja, Lagos</p>
        <p className="text-sm text-gray-500">🗓️ March 15, 2025, 7:00 PM</p>
        </div>     
        <div className="bg-[#041f24] h-[3px]"></div>
          <h3 className="text-start mt-6">Select Ticket Type</h3>
        <div className=" space-y-4 flex justify-between items-center border border-[#1a331a] p-4 rounded-lg">
         <button
            className="  bg-[#0b380b] hover:bg-[#1b311b] p-5 rounded"
            onClick={() => handleSelect("Free")}
          >
            Free - ($0)
          </button>
          <button
            className=" bg-transparent border border-[#1a331a] hover:bg-[#1b311b] p-4 rounded"
            onClick={() => handleSelect("VIP")}
          >
            VIP - ($150)
          </button>
        </div>
        <h4 className="text-start mt-4">Number of Tickets</h4>
        <input type="number"  className="border rounded-md p-2 border-[#1a331a] w-full outline:none" />
        <div className="flex justify-between items-center mt-6">
      <button className="border border-[#1a331a] text-center px-12 text-[#1a331a]">cancel</button>
      <button className="border border-[#1a331a] text-center px-12 bg-[#1a331a]"
      onClick={() => handleSelect("Free")}
      >Next</button>
      </div>
      </div>
    </div>
  );
};

export default SelectTicket;
