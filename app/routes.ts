import {type RouteConfig, index, route} from "@react-router/dev/routes";

export default [
    index("home.tsx"),
    route("about", "./about.tsx"),
    route("tutors", "./tutors/tutors.tsx", [
        route("/tutors/:tutorId", "./tutors/tutor-details.tsx"),
    ]),
] satisfies RouteConfig;
