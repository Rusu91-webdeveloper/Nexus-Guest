"use client";

import { SignIn, useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface SignInComponentProps {
  hasBookingData: boolean;
}

export default function SignInComponent({
  hasBookingData,
}: SignInComponentProps) {
  const router = useRouter();
  const { isSignedIn } = useAuth(); // Using Clerk's useAuth hook to get sign-in state

  useEffect(() => {
    if (isSignedIn) {
      if (hasBookingData) {
        router.push("/dashboard/booking-confirmation");
      } else {
        router.push("/dashboard");
      }
    }
  }, [isSignedIn, hasBookingData, router]);

  return (
    <SignIn
      path="/sign-in"
      routing="path"
      signUpUrl="/sign-up"
      fallbackRedirectUrl={
        hasBookingData ? "/dashboard/booking-confirmation" : "/dashboard"
      }
    />
  );
}
