import React from "react";
import {Link, Outlet} from "react-router";

export interface Tutor {
  id: number;
  name: string;
  subjects: string[];
  hourlyRate: number;
  isActive: boolean;
}

export async function clientLoader() {
  const res = await fetch(`http://localhost:8080/tutors`);
  return await res.json();
}

export default function Tutors({loaderData}) {
  const tutors: Tutor[] = loaderData;

  return <div style={{p:9}}>
    <b>Heute aktive Lehrkräfte</b>

    <ul>
      {tutors.map((tutor: Tutor) => (
          <li key={tutor.id}>
            <Link to={"/tutors/"+tutor.id}>{tutor.name}</Link>
          </li>
      ))}
    </ul>

    <br />
    <p>Details (&lt;Outlet&gt;):</p>
    <Outlet />
  </div>;
}