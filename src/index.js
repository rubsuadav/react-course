import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "./Button";
import { Gretting, UserCard } from "./Greeting";
import { TaskCard } from "./Task";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <TaskCard ready={true} />
  </>
);
