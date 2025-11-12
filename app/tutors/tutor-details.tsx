import React from "react";
import type {Route} from "./+types/tutors";
import type {Tutor} from "~/tutors/tutors";
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {PhoneCallIcon} from "lucide-react";

export async function clientLoader({params}: Route.ClientLoaderArgs) {
    const res = await fetch(`http://localhost:8080/tutors/${params.tutorId}`);
    return await res.json();
}

export default function TutorDetails({ loaderData  }) {
    const tutor: Tutor = loaderData;
    return (
        <Card sx={{maxWidth: 345, m: 2}}>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://img.freepik.com/free-photo/woman-with-headset-working-laptop_23-2148893818.jpg"
                    alt="green iguana"/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {tutor.name}
                    </Typography>
                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                        <strong>Fächer:</strong>
                        <ul style={{listStyle: "disc", paddingLeft: 2}}>
                            {tutor.subjects.map(subject => (
                                <li>{subject}</li>
                            ))}
                        </ul>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary" startIcon={<PhoneCallIcon />}>
                        Anfragen
                    </Button>
                </CardActions>
        </Card>
    );
}