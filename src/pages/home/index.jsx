import React from "react";
import {useParams} from "react-router-dom";

import "./home.style.css";

export default function HomePage() {
  let {name} = useParams();

  return <div className="home-wrapper">Hi! {name}</div>;
}
