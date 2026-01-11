import { Suspense } from "react";
import ApplyClient from "./ApplyClient";

export default function ApplyPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black text-gray-200 p-6">Loading…</div>}>
      <ApplyClient />
    </Suspense>
  );
}
