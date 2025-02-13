import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"; // ✅ Corrected Import Path

const BookingFlow = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState("");
  const [userData, setUserData] = useState({ name: "", email: "" });

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);
  const handleChange = (e) => setUserData({ ...userData, [e.target.name]: e.target.value });

  const handleConfirm = () => {
    alert(`Booking Confirmed! Date: ${date}, Time: ${time}, Name: ${userData.name}, Email: ${userData.email}`);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Make a Subscription</DialogTitle>
        </DialogHeader>

        {step === 1 && (
          <div className="flex flex-col space-y-4">
            <p>Select a Date:</p>
            <DatePicker selected={date} onChange={(d) => setDate(d)} className="border p-2 rounded w-full" />
            <Button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleNext} disabled={!date}>
              Next
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="flex flex-col space-y-4">
            <p>Select a Time:</p>
            <Input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="border p-2 rounded" />
            <div className="flex justify-between">
              <Button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={handleBack}>
                Back
              </Button>
              <Button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleNext} disabled={!time}>
                Next
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="flex flex-col space-y-4">
            <p>Enter Your Details:</p>
            <Input name="name" placeholder="Your Name" onChange={handleChange} className="border p-2 rounded" />
            <Input name="email" placeholder="Your Email" type="email" onChange={handleChange} className="border p-2 rounded" />
            <div className="flex justify-between">
              <Button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={handleBack}>
                Back
              </Button>
              <Button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleNext} disabled={!userData.name || !userData.email}>
                Next
              </Button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="flex flex-col space-y-4">
            <p>Confirm your Booking:</p>
            <p>Date: {date?.toDateString()}</p>
            <p>Time: {time}</p>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
            <div className="flex justify-between">
              <Button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={handleBack}>
                Back
              </Button>
              <Button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleConfirm}>
                Confirm
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookingFlow;
