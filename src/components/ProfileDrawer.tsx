"use client";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type ProfileDrawerProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const dummyProfile = {
  name: "John Doe",
  email: "john.doe@example.com",
  bio: "Frontend Developer at TechCorp. Passionate about React, UI/UX, and open source.",
  image: "https://i.pravatar.cc/150?img=3",
};

export default function ProfileDrawer({ open, setOpen }: ProfileDrawerProps) {
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent className="h-1/2 max-h-[50vh] p-6 space-y-4">
        <div className="flex flex-col items-center text-center">
          <Avatar className="w-20 h-20">
            <AvatarImage src={dummyProfile.image} alt={dummyProfile.name} />
            <AvatarFallback>{dummyProfile.name[0]}</AvatarFallback>
          </Avatar>
          <h2 className="text-xl font-semibold mt-4">{dummyProfile.name}</h2>
          <p className="text-sm text-muted-foreground">{dummyProfile.email}</p>
          <p className="mt-2 text-sm">{dummyProfile.bio}</p>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
