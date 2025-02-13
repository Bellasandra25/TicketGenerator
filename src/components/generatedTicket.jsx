import React, { useEffect, useRef } from "react";
import html2canvas from "html2canvas";
import JsBarcode from "jsbarcode";

const GeneratedTicket = ({ userData }) => {
  const barcodeRef = useRef(null);
  const ticketNumber = userData.ticketNumber || Math.floor(100000 + Math.random() * 900000).toString();
  useEffect(() => {
    if (barcodeRef.current) {
      JsBarcode(barcodeRef.current, ticketNumber, {
        format: "CODE128",
        displayValue: true,
        lineColor: "#fff",
        background: "#000",
        width: 2,
        height: 50,
      });
    }
  }, [ticketNumber]);

  const downloadTicket = () => {
    const ticketElement = document.getElementById("ticket");
    html2canvas(ticketElement).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "ticket.png";
      link.click();
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#033c46] text-white">
      <div className="bg-[#013038] p-6 rounded-lg shadow-lg text-center w-96">
        <h2 className="text-xl font-semibold mb-4">Your Ticket is Booked!</h2>
        
        <div id="ticket" className="bg-[#012025] p-4 rounded-lg text-center">
        {userData.avatar && (
            <img src={userData.avatar} alt="Avatar" className="mx-auto my-4 w-32 h-32 rounded-lg" />
          )}
          <h3 className="text-lg font-bold">Techember Fest '25</h3>
          <p className="text-gray-400">📍 10 Banana Road, Ikeja</p>
          <p className="text-sm text-gray-500">🗓️ March 15, 2025</p>

          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Ticket Type:</strong> {userData.ticketType}</p>
          <p><strong>Special Request:</strong> {userData.specialRequest}</p>
          {/* Barcode */}
          <svg ref={barcodeRef} className="w-[100%]"></svg>
        </div>

        <button className="w-full bg-[#033c46] hover:bg-[#197686] p-3 rounded mt-4" onClick={downloadTicket}>
          Download Ticket
        </button>
      </div>
    </div>
  );
};

export default GeneratedTicket;
