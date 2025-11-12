import type { Route } from "../.react-router/types/app/routes/+types";
import { Welcome } from "./welcome/welcome";
import React from "react";

export function meta({}: Route.MetaArgs) {
  return [
    {title: "Mensa App"},
    {name: "description", content: "Was gibt's heute in der Mensa?"},
  ];
}

export default function Home() {
  return <Welcome/>;
}
