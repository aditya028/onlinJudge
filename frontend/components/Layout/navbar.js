import Link from "next/link";

export default function Navbar() {
  return (
      <div style={{boxShadow: '0 10px 10px -13px'}} className="flex flex-row justify-between p-5  ">
        <span className="font-medium text-[#D0589E] text-[24px]">
          <Link href="/">onlineJudge</Link>
        </span>
        <div className="flex gap-3">
          <button className="btn  btn-sm btn-outline btn-accent ">Sign In</button>
          <button className="btn btn-sm btn-accent">Sign Up</button>
        </div>
      </div>
  );
}
