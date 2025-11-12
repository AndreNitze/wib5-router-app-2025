import React from "react";
import { Link } from "react-router";

export function Welcome() {
    return (
        <div className="pt-16 pb-4">
            <b>Willkommen bei der Tutor-App!</b>
            <p>Finde heraus, welche Lehrkräfte heute verfügbar sind.</p>
            <br />
            <Link to="/tutors">Zu den Lehrkräften</Link>
            <br />
            <br />
            <Link to="/about">Über diese App</Link>
        </div>
    );
}
