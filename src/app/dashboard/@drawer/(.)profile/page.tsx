"use client";

import ProfileDrawer from "@/components/ProfileDrawer";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function InterceptedProfile() {
  const [open, setOpen] = useState(true);
  const router = useRouter();

  useEffect(() => {
    console.log(open);
    if (!open) {
      router.push("/dashboard");
    }
  }, [open]);

  return (
    <div>
      <ProfileDrawer open={open} setOpen={setOpen} />
    </div>
  );
}
