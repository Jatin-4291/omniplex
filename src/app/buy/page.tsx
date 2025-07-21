"use client";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function BuyPage() {
  const handleBuy = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
    });
    const data = await res.json();
    const stripe = await stripePromise;
    stripe?.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <button
        className="bg-blue-600 text-white px-6 py-3 rounded-lg text-xl"
        onClick={handleBuy}
      >
        Buy Premium - $10
      </button>
    </div>
  );
}
