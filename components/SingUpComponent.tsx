"use client";

import { SignUp, useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface SignUpComponentProps {
  hasBookingData: boolean;
}

export default function SignUpComponent({
  hasBookingData,
}: SignUpComponentProps) {
  const router = useRouter();
  const { isSignedIn } = useAuth(); // Use Clerk's useAuth to check if the user is signed in

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
    <SignUp
      path="/sign-up"
      routing="path"
      signInUrl="/sign-in"
      fallbackRedirectUrl={
        hasBookingData ? "/dashboard/booking-confirmation" : "/dashboard"
      }
    />
  );
}
