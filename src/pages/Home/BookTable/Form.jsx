import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import { CgShapeTriangle } from "react-icons/cg";
import { SlCalender } from "react-icons/sl";
import "react-datepicker/dist/react-datepicker.css";
import CustomButton from "../../../components/CustomButton";

const Form = () => {
  const [people, setPeople] = useState("");
  const [selectedDate, setSelected] = useState(null);
  const datePickerRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    console.log(name, email, people, selectedDate, message);
  };

  const incrementPeople = () => {
    if (people === "") {
      setPeople(0);
    }
    setPeople((prev) => prev + 1);
  };

  const decrementPeople = () => setPeople((prev) => (prev > 0 ? prev - 1 : 0));

  const handlePeopleChange = (e) => {
    const value = parseInt(e.target.value);
    setPeople(isNaN(value) ? 0 : value);
  };

  const openDatePicker = () => {
    datePickerRef.current.setOpen(true);
  };

  return (
    <form className="card-body !px-0" onSubmit={handleSubmit}>
      <div className="form-control grid grid-cols-1 md:grid-cols-2   gap-6">
        {/* Name */}
        <div className="grid">
          <input
            type="text"
            placeholder="Your Name *"
            id="name"
            name="name"
            autoComplete="off"
            className="input !rounded-none !bg-transparent !border-white !outline-none 
                   focus:!border-white focus:!bg-transparent  
                   placeholder-white text-white"
            required
          />
        </div>
        {/* Email */}
        <div className="grid">
          <input
            type="email"
            placeholder="Your Email"
            id="email"
            name="email"
            autoComplete="off"
            className="input !rounded-none !bg-transparent !border-white !outline-none 
                   focus:!border-white focus:!bg-transparent  
                   placeholder-white text-white"
            required
          />
        </div>
        {/* Reservation Date */}
        <div className="relative grid">
          <DatePicker
            ref={datePickerRef}
            selected={selectedDate}
            onChange={(date) => setSelected(date)}
            placeholderText="Reservation Date"
            className="input w-full !rounded-none !bg-transparent !border-white !outline-none 
                     focus:!border-white focus:!bg-transparent text-white"
            calendarClassName="react-datepicker-custom-calendar"
          />
          <SlCalender
            color="white"
            className="absolute right-4 top-[15px] cursor-pointer"
            onClick={openDatePicker}
          />
        </div>
        {/* People */}
        <div className="relative grid">
          <input
            type="number"
            placeholder="Total people"
            id="people"
            name="people"
            autoComplete="off"
            value={people}
            onChange={handlePeopleChange}
            className="input w-full !rounded-none !bg-transparent !border-white !outline-none 
                     focus:!border-white focus:!bg-transparent  
                     placeholder-white text-white hide-number-input-arrows"
          />
          <span className="text-white absolute right-4 top-2 flex flex-col items-center justify-center">
            <CgShapeTriangle
              size={14}
              onClick={incrementPeople}
              style={{ cursor: "pointer", transform: "rotate(0deg)" }}
            />
            <CgShapeTriangle
              size={14}
              onClick={decrementPeople}
              style={{ cursor: "pointer", transform: "rotate(180deg)" }}
            />
          </span>
        </div>
        {/* Message */}
        <textarea
          placeholder="Message"
          id="message"
          name="message"
          autoComplete="off"
          className=" h-36 md:col-span-2  input !rounded-none !bg-transparent !border-white !outline-none 
                   focus:!border-white focus:!bg-transparent placeholder-white text-white resize-none p-2"
          required
        />
      </div>

      <div className="form-control mt-6 w-fit">
        <CustomButton buttonText="Book Now" />
      </div>
    </form>
  );
};

export default Form;
