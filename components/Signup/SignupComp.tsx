import Link from "next/link";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

const SignupComp = () => {
  return (
    <main className="p-8">
      <div className="flex justify-end">
        <Link
          href="/auth/login"
          className="uppercase text-[#1CB0F6] font-bold text-[16px] p-4 px-6 rounded-2xl border-2 border-[#AFAFAF] hover:bg-[#E5E5E5] duration-300"
        >
          Log in
        </Link>
      </div>
      <section>
        <div className="flex flex-col items-center p-6">
          <form className="w-[380px] flex flex-col gap-4">
            <h1 className="text-[26px] font-extrabold mt-2 mb-4 text-center text-[#333333]">
              Create your profile
            </h1>
            <input
              type="number"
              placeholder="Age"
              className="p-2 px-4 w-full text-[22px] rounded-md placeholder:text-[#4B4B4B] outline-none focus:ring-2 focus:ring-inset focus:ring-[#1CB0F6] focus:border-[#1CB0F6]"
            />
            <input
              type="text"
              placeholder="Name (optional)"
              className="p-2 px-4 w-full text-[22px] rounded-md placeholder:text-[#4B4B4B] outline-none focus:ring-2 focus:ring-inset focus:ring-[#1CB0F6] focus:border-[#1CB0F6]"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-2 px-4 w-full text-[22px] rounded-md placeholder:text-[#4B4B4B] outline-none focus:ring-2 focus:ring-inset focus:ring-[#1CB0F6] focus:border-[#1CB0F6]"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-2 px-4 w-full text-[22px] rounded-md placeholder:text-[#4B4B4B] outline-none focus:ring-2 focus:ring-inset focus:ring-[#1CB0F6] focus:border-[#1CB0F6]"
            />
            <button className="bg-[#1CB0F6] hover:bg-[#77ccf3] duration-300 text-white p-2 py-3 rounded-xl items-center text-center uppercase font-bold tracking-widest w-full">
              Create acount
            </button>
            <div className="text-[#AFAFAF]">
              <h2 className="flex flex-row flex-nowrap items-center">
                <span className="flex-grow block border-t-2 border-[#AFAFAF]"></span>
                <span className="m-2">OR</span>
                <span className="flex-grow block border-t-2 border-[#AFAFAF]"></span>
              </h2>
            </div>
            <button className="flex gap-2 justify-center bg-white hover:bg-[#AFAFAF] duration-300 text-blue p-2 py-3 rounded-xl items-center text-center font-bold tracking-widest shadow-[0_6px_0] shadow-[#AFAFAF] w-full">
              <FaFacebookF /> facebook
            </button>
            <button className="flex gap-2 justify-center bg-white hover:bg-[#AFAFAF] duration-300 text-blue p-2 py-3 rounded-xl items-center text-center font-bold tracking-widest shadow-[0_6px_0] shadow-[#AFAFAF] w-full">
              <FaGoogle />
              Google
            </button>
            <div className="text-center text-[#AFAFAF] text-[14px]">
              <span>
                By signing in to Duolingo, you agree to our Terms and Privacy
                Policy.
              </span>
            </div>
            <div className="text-center text-[#AFAFAF] text-[14px]">
              <span>
                This site is protected by reCAPTCHA Enterprise and the Google
                Privacy Policy and Terms of Service apply.
              </span>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default SignupComp;
