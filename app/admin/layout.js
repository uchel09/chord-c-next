import { Home, Projector } from "lucide-react";
import Link from "next/link";
import React from "react";

const AdminLayout = ({ children }) => {

  return (
    <div className="w-full h-[100vh] flex">
      <aside className="h-[100%] flex items-center px-2 justify-center gap-10 flex-col shadow-lg my-auto bg-[white]">
        <Link href="/admin">
          <Home color="blue" />
        </Link>
        <Link href="/admin/chords">
          <Projector />
        </Link>
      </aside>
      <div className="flex-1  px-3 py-2">{children}</div>
    </div>
  );
};

export default AdminLayout;
