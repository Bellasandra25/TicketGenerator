import { useState } from "react";
import SelectTicket from "./components/selectTicket";
import AttendeeDetails from "./components/AttendeeDetails";
import GeneratedTicket from "./components/generatedTicket";

function App() {
  // Manage step progression (1 = select ticket, 2 = enter details, 3 = ticket)
  const [step, setStep] = useState(1);

  // Store user data (name, email, uploaded image, ticket type)
  const [userData, setUserData] = useState({ name: "", email: "", avatar: "", ticketType: "", specialRequest:""});

  return (
    <div>
      {step === 1 && <SelectTicket setStep={setStep} setUserData={setUserData} userData={userData} />}
      {step === 2 && <AttendeeDetails setStep={setStep} setUserData={setUserData} userData={userData} />}
      {step === 3 && <GeneratedTicket setStep={setStep} userData={userData} />}
    </div>
  );
}

export default App;
