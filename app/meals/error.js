"use client";
import React from "react";

export default function Error({ error }) {
  return (
    <main className="error">
      <h1>An error occured</h1>
      <p>{`${error.message}, Plaese try again later`}</p>
    </main>
  );
}
