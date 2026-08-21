import { NextResponse } from "next/server";

const allowedTimes = new Set(["11:00", "13:00", "15:00", "19:00", "21:00"]);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().replace(/[<>]/g, "").slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = clean(body.name, 80);
    const email = clean(body.email, 120).toLowerCase();
    const phone = clean(body.phone, 20);
    const date = clean(body.date, 10);
    const time = clean(body.time, 5);
    const guests = Number(body.guests);

    if (!name || name.length < 2 || !emailPattern.test(email) || !/^[+\d ()-]{7,20}$/.test(phone)) {
      return NextResponse.json({ message: "Please enter valid contact details." }, { status: 400 });
    }
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || date < new Date().toISOString().slice(0, 10)) {
      return NextResponse.json({ message: "Please choose a valid future date." }, { status: 400 });
    }
    if (!allowedTimes.has(time) || !Number.isInteger(guests) || guests < 1 || guests > 12) {
      return NextResponse.json({ message: "Please choose a valid time and guest count." }, { status: 400 });
    }

    // Connect this validated payload to the restaurant CRM/email provider in production.
    console.info("Reservation request received", { name, email, phone, date, time, guests });
    return NextResponse.json({ message: "Your request has been received. We will confirm shortly." }, { status: 201 });
  } catch {
    return NextResponse.json({ message: "We could not process that request. Please try again." }, { status: 400 });
  }
}
