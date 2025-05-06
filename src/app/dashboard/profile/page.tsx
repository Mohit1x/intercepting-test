// app/profile/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const dummyProfile = {
  name: "John Doe",
  email: "john.doe@example.com",
  bio: "Frontend Developer at TechCorp. Passionate about React, UI/UX, and open source.",
  image: "https://i.pravatar.cc/150?img=3",
  stats: {
    posts: 12,
    followers: 340,
    following: 180,
  },
};

export default function ProfilePage() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6 my-[200px]">
      <Card>
        <CardHeader className="flex flex-col items-center text-center">
          <Avatar className="w-24 h-24">
            <AvatarImage src={dummyProfile.image} alt={dummyProfile.name} />
            <AvatarFallback>{dummyProfile.name[0]}</AvatarFallback>
          </Avatar>
          <CardTitle className="text-2xl mt-4">{dummyProfile.name}</CardTitle>
          <p className="text-sm text-muted-foreground">{dummyProfile.email}</p>
          <p className="mt-2 text-sm">{dummyProfile.bio}</p>
        </CardHeader>
        <CardContent className="flex justify-center gap-4 mt-4">
          <Button variant="default">Edit Profile</Button>
          <Button variant="destructive">Logout</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>User Stats</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-between px-4 text-center">
          <div>
            <p className="text-xl font-bold">{dummyProfile.stats.posts}</p>
            <p className="text-sm text-muted-foreground">Posts</p>
          </div>
          <div>
            <p className="text-xl font-bold">{dummyProfile.stats.followers}</p>
            <p className="text-sm text-muted-foreground">Followers</p>
          </div>
          <div>
            <p className="text-xl font-bold">{dummyProfile.stats.following}</p>
            <p className="text-sm text-muted-foreground">Following</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
