import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST() {
  try {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) {
      return new NextResponse("Skipped due to missing API key", {
        status: 200,
      });
    }

    const stripe = new Stripe(key);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Pro Plan",
            },
            unit_amount: 1000, // $10
          },
          quantity: 1,
        },
      ],
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });

    return NextResponse.json({ id: session.id });
  } catch (err) {
    console.error(err);
    return new NextResponse("Stripe error", { status: 500 });
  }
}
