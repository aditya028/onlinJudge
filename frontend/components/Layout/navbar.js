import Link from "next/link";

export default function Navbar() {
  return (
    <div
      style={{ boxShadow: "0 10px 10px -13px" }}
      className="flex flex-row justify-between p-5  "
    >
      <span className="font-medium text-[#D0589E] text-[24px]">
        <Link href="/">onlineJudge</Link>
      </span>
      <div className="flex gap-3">
        <Link href={'/signIn'} className="btn  btn-sm btn-outline btn-accent ">Sign In</Link>
        <Link href={'/signUp'} className="btn btn-sm btn-accent">Sign Up</Link>
        <div className="avatar dropdown dropdown-hover dropdown-end">
          <div className="w-10 hover:cursor-pointer rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
          <ul
            className="dropdown-content z-[1] menu p-2 shadow bg-white text-black font-semibold rounded-box w-[140px]"
          >
            <li>
              <Link href={'/myaccount'}>My Account</Link>
            </li>
            <li>
              <Link href={'/signIn'}>Sign out</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
