import React from "react";
import {ContactPicker} from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="title"
        aria-label="Title"
        placeholder="What is the appointment about?"
        value={title}
        onChange={({target}) => setTitle(target.value)}
      />

      <input 
        type="date"
        id="date"
        aria-label="date"
        min={getTodayString()}
        value={date} 
        onChange={({target}) => setDate(target.value)}
      />

      <input 
        type="time"
        id="time"
        aria-label="Time"
        value={time}
        onChange={({target}) => setDate(target.value)}
      />

      <ContactPicker
        contacts={contacts}
        value={contact}
        onChange={({target}) => setContact(target.value)}
      />

      <input type="submit" value="Add"/>
      
    </form>
  );
};
