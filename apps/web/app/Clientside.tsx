"use client";

import { useEffect, useState } from "react";
import { trpc } from "./trpc";


export default function Clientside() {

    const [greeting, setGreeting] = useState("");
    useEffect(() => {
      trpc.hello.query({ }).then((response) => {
        setGreeting(response);
      });
    });
    
  return (
    <div>
      <h1 className="text-white text-3xl">{`TRPC Response Clientside: ${greeting}`}</h1>
    </div>
  );
}
