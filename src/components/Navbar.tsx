"use client";
import Image from "next/image";
import Link from "next/link";

import Container from "./Container";
import ProfileMenu from "./ProfileMenu";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { status ,data} = useSession();
  return (
    <nav className="  navbar">
      <Container className="  w-full ">
        <div className="flexBetween gap-4">
          <div className="flex-1 flexStart gap-10">
            <Link href="/">
              <Image
                src="/logo.svg"
                priority={true}
                width={116}
                height={43}
                alt="logo"
              />
            </Link>
          </div>

          {status == "loading" ? (
            <p className="bg-slate-200/50 py-3 rounded-[10px] w-[50px] h-[50px]" />
          ) : (
            <div className="flexCenter gap-4">
              <ProfileMenu session={data?.user} />
            </div>
          )}
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
