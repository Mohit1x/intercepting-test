"use client";

import ProfileDrawer from "@/components/ProfileDrawer";
import { useEffect, useState } from "react";

export default function InterceptedProfile() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    console.log(open);
  }, [open]);

  return (
    <div>
      <ProfileDrawer open={open} setOpen={setOpen} />
    </div>
  );
}
