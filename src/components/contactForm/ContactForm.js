import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="name"
        placeholder="Name"
        aria-label="name"
        value={name}
        onChange={({target}) => {setName(target.value)}}
        required
      />

      <input
        type="tel"
        id="phone"
        aria-label="phone"
        placeholder="Phone (000) 000-0000"
        pattern="((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}"
        value={phone}
        onChange={({target}) => {setPhone(target.value)}}
        required
      />

      <input
        type="email"
        id="email"
        aria-holder="email"
        placeholder="Email"
        value={email}
        onChange={({target}) => {setEmail(target.value)}}
        required
      />

      <input
        type="submit"
        />
    </form>
  );
};
