import Link from "next/link";
import React from "react";

function Panel({ children }) {
  return (
    <div className="flex  h-[674px]  gap-y-4">
      <div className="border-r-4  w-1/6">
        <ul className=" p-2 ">
          <Link href="/dashboard/profile">
            <li className="p-2 border-4 rounded-xl mb-6">Profile</li>
          </Link>
          <Link href="/dashboard/product">
            <li className="p-2 border-4 rounded-xl mb-6">Products</li>
          </Link>
        </ul>
      </div>
      <div className=" cols-9 w-full">{children}</div>
    </div>
  );
}

export default Panel;
