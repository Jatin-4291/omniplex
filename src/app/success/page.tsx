"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SuccessPage() {
  const router = useRouter();

  useEffect(() => {
    // Mark user as premium (for now, use localStorage or cookies)
    localStorage.setItem("isPremium", "true");

    // Redirect to homepage after 2 seconds
    const timer = setTimeout(() => {
      router.push("/");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-green-600 text-3xl text-center mt-10">
      Payment Successful 🎉
      <br />
      Redirecting to homepage...
    </div>
  );
}
