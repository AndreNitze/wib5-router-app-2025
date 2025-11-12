import React from "react";
import {Link} from "react-router";
import {Button as ShadcnButton} from "~/components/ui/button";
import {Button as MuiButton, IconButton, Tooltip} from "@mui/material";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import {InfoIcon} from "lucide-react";
import {HappyCustomerChart} from "~/welcome/HappyCustomerChart";

export function Welcome() {
    return (
        <div className="p-8">
            <b>Willkommen bei der Tutor-App!</b>
            <p>Finde heraus, welche Lehrkräfte heute verfügbar sind.</p>
            <br />
            <Link to="/tutors">Zu den Lehrkräften (&lt;Link&gt;)</Link>
            <br />
            <br />
            <Link to="/tutors">
                <ShadcnButton>Zu den Lehkräften (shadcn Button)</ShadcnButton>
            </Link>
            <br /><br />
            <MuiButton variant={"contained"} startIcon={<RocketLaunchIcon />}>Zu den Lehkräften (MUI Button)</MuiButton>
            <br />
            <HappyCustomerChart />
            <br />
            Impressum und Datenschutz
            <Link to="/about">
                <Tooltip title={"Über diese App"} arrow>
                <IconButton color="primary">
                    <InfoIcon />
                </IconButton>
                </Tooltip>
            </Link>
        </div>
    );
}
