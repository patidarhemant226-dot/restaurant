"use client";

import { FormEvent, useState } from "react";
import { Arrow } from "../ui/Arrow";

const restaurantWhatsApp = "912245678900";

export function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = [
      "Hello Mediterra, I would like to reserve a table.",
      `Name: ${formData.get("name")}`,
      `Date: ${formData.get("date")}`,
      `Time: ${formData.get("time")}`,
      `Guests: ${formData.get("guests")}`,
    ].join("\n");

    window.open(`https://wa.me/${restaurantWhatsApp}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  return (
    <form className="reservation-form" onSubmit={handleSubmit}>
      <div className="reservation-fields">
        <label><span>Your name</span><input name="name" type="text" autoComplete="name" required /></label>
        <label><span>Date</span><input name="date" type="date" required /></label>
        <label><span>Time</span><input name="time" type="time" required /></label>
        <label><span>Guests</span><select name="guests" defaultValue="2" required><option value="1">1 guest</option><option value="2">2 guests</option><option value="3">3 guests</option><option value="4">4 guests</option><option value="5+">5+ guests</option></select></label>
      </div>
      <button className="button button-cream" type="submit">Reserve on WhatsApp <Arrow /></button>
      {submitted && <p className="reservation-status" role="status">WhatsApp is opening with your reservation details.</p>}
    </form>
  );
}
