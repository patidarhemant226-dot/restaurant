"use client";

import { FormEvent, useState } from "react";
import { Arrow } from "../ui/Arrow";

type FormState = "idle" | "sending" | "success" | "error";

export function ReservationForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setMessage("");
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message);
      setState("success");
      setMessage(result.message);
      event.currentTarget.reset();
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Please try again.");
    }
  }

  return (
    <form className="reservation-form" onSubmit={handleSubmit}>
      <div className="reservation-form-grid">
        <label>Full name<input name="name" required minLength={2} maxLength={80} autoComplete="name" placeholder="Your name" /></label>
        <label>Email<input name="email" required type="email" maxLength={120} autoComplete="email" placeholder="you@example.com" /></label>
        <label>Phone<input name="phone" required type="tel" maxLength={20} autoComplete="tel" placeholder="+91 98765 43210" /></label>
        <label>Date<input name="date" required type="date" min={new Date().toISOString().slice(0, 10)} /></label>
        <label>Time<select name="time" defaultValue="19:00"><option value="11:00">11:00 AM</option><option value="13:00">1:00 PM</option><option value="15:00">3:00 PM</option><option value="19:00">7:00 PM</option><option value="21:00">9:00 PM</option></select></label>
        <label>Guests<select name="guests" defaultValue="2"><option value="1">1 guest</option><option value="2">2 guests</option><option value="3">3 guests</option><option value="4">4 guests</option><option value="5">5 guests</option><option value="6">6 guests</option><option value="8">8 guests</option><option value="10">10 guests</option><option value="12">12 guests</option></select></label>
      </div>
      <button className="button button-cream" type="submit" disabled={state === "sending"}>{state === "sending" ? "Sending request..." : "Request a table"} <Arrow /></button>
      <p className={`form-message ${state}`} role="status" aria-live="polite">{message}</p>
    </form>
  );
}
