import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DashBoard() {
  return (
    <div className="flex flex-col gap-10 p-20">
      <h1>Dashboard</h1>
      <div>
        <Link href={"dashboard/profile"}>
          <Button>Open Profile</Button>
        </Link>
      </div>
    </div>
  );
}
