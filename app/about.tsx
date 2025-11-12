import React from "react";
import type { Route } from "./+types/tutors";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Us" },
    { name: "description", content: "Learn more about our application and team." },
  ];
}

export default function About() {
  return (
    <div>
      <b>About Us</b>
      <p>Welcome to our application! We are dedicated to providing the best service possible.</p>
      <p>Our team is passionate about creating user-friendly and efficient applications.</p>
        <Link to="/">Go back to Home</Link>
    </div>
  );
}