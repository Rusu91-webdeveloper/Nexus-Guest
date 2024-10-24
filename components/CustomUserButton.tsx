"use client";

import { useState } from "react";
import { UserButton, useUser, useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import AccountModal from "@/components/AccountModal";

export default function CustomUserButton() {
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const { user } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();

  const handleManageAccount = () => {
    setIsAccountModalOpen(true);
  };

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };

  if (!user) return null;

  return (
    <div className="flex items-center space-x-4">
      <UserButton
        afterSignOutUrl="/"
        appearance={{
          elements: {
            avatarBox: {
              width: 40,
              height: 40,
            },
          },
        }}
        userProfileMode="modal"
      />
      <button
        onClick={handleManageAccount}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Manage Account
      </button>
      <button
        onClick={handleSignOut}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Sign Out
      </button>
      {isAccountModalOpen && (
        <AccountModal
          open={isAccountModalOpen}
          onClose={() => setIsAccountModalOpen(false)}
        />
      )}
    </div>
  );
}
