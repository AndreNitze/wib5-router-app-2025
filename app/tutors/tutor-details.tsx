import React from "react";
import type {Route} from "./+types/tutors";
import type {Tutor} from "~/tutors/tutors";

export async function clientLoader({params}: Route.ClientLoaderArgs) {
    const res = await fetch(`http://localhost:8080/tutors/${params.tutorId}`);
    return await res.json();
}

export default function TutorDetails({ loaderData  }) {
    const tutor: Tutor = loaderData;
    return (
        <div style={{ border: "1px solid black" }}>
            <b>{tutor.name}</b> (Lehkraft {tutor.id})
            <p>{tutor.hourlyRate} € / Stunde</p>
            <p>Fächer:</p>
            <ul style={{ listStyle: "disc", paddingLeft: 2 }}>
                {tutor.subjects.map(subject => (
                    <li>{subject}</li>
                ))}
            </ul>
        </div>
    );
}