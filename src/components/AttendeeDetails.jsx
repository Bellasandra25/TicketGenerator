import React, { useState, useEffect } from "react";

const AttendeeDetails = ({ setStep, setUserData, userData }) => {
  const [loading, setLoading] = useState(false);

  // Load saved user data from localStorage when component mounts
    useEffect(() => {
      const savedData = localStorage.getItem("ticketUserData");
      if (savedData) {
        setUserData(JSON.parse(savedData));
      } else {
        // Generate a unique ticket number if not saved
        const newTicketNumber = Math.floor(100000 + Math.random() * 900000).toString();
        setUserData(prev => ({ ...prev, ticketNumber: newTicketNumber }));
      }
    }, []);
    

  // Save user data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("ticketUserData", JSON.stringify(userData));
  }, [userData]);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "imageUpload");

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dsefojiqs/image/upload", 
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      setUserData({ ...userData, avatar: data.secure_url }); 
      setLoading(false);
    } catch (error) {
      console.error("Image upload failed:", error);
      setLoading(false);
    }
  };
return(
<div className="flex flex-col items-center justify-center min-h-screen bg-[#033c46] text-white ">
<div className="bg-[#033c46] p-6 rounded-lg shadow-lg text-center w-96 border border-[#1a331a]">
      <h2 className="text-start mb-4">Upload Profile Photo</h2>

      {/* Upload Image */}
      <input type="file" onChange={handleImageUpload} className="py-12 p-4 bg-[#00242b] border rounded-lg border-[#1a331a]" />
      {loading && <p>Uploading...</p>}

      {/* Show Uploaded Image */}
      {userData.avatar && <img src={userData.avatar} alt="Avatar" className="w-32 h-32 rounded-full mt-4 border border-[#1a8da1] bg-[#197686]" />}

      {/* User Input Fields */}
      <div className="flex flex-col mt-6 items-start ">
      <label htmlFor="name">Enter Your Name</label>
      <input
        type="text"
        name="name"
        value={userData.name}
        onChange={handleChange}
        className="p-1.5 mt-4 border border-[#197686] rounded-lg w-full"
      />
      </div>
    
     <div className="flex flex-col mt-6 items-start ">
     <label htmlFor="name">Enter Your Name</label>
     <input
        type="email"
        name="email"
        value={userData.email}
        onChange={handleChange}
       className="p-1.5 mt-4 border border-[#197686] rounded-lg w-full"
      />
     </div>
     <div className="flex flex-col mt-6 items-start ">
     <label htmlFor="name">Special Request</label>
     <textarea
        type="text"
        name="text"
        value={userData.specialRequest}
       className=" mt-2 border border-[#197686] rounded-lg w-full"
      />
     </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mt-6">
      <button onClick={() => setStep(1)} className="border border-[#1a331a] text-center px-12 text-[#1a331a]">Back</button>
      <button onClick={() => setStep(3)} className="border border-[#1a331a] text-center px-8 bg-[#1a331a]">Get My Free Ticket</button>
      </div>
      </div>
    </div>
  );
};

export default AttendeeDetails;
