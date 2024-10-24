"use client";

import { UserProfile } from "@clerk/nextjs";
import { Dialog } from "@/components/ui/dialog";

interface AccountModalProps {
  open: boolean;
  onClose: () => void;
}

export default function AccountModal({ open, onClose }: AccountModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <UserProfile path="/dashboard/account" routing="path" />
    </Dialog>
  );
}
