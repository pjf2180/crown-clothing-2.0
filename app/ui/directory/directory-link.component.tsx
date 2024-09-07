"use client";
import Link from "next/link";

export function DirectoryLink({ linkTo }: { linkTo: string }) {
  return (
    <div className=" opacity-50 absolute top-0 bottom-0 right-0 left-0">
      <Link className="w-full h-full block" href={linkTo}></Link>
    </div>
  );
}
