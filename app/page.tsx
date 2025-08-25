'use client';
import { Suspense } from "react";
import AISandboxPage from "./app";

export default function Page () {
  return <Suspense><AISandboxPage/></Suspense>
}