import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#1C1C1C] p-8">
        <Link
          to="/"
          className="text-sm text-[#f47735] hover:text-orange-400"
        >
          ← Back to home
        </Link>

        <h1 className="mt-8 text-3xl font-bold">
          Create your account
        </h1>

        <p className="mt-2 text-gray-400">
          Find your perfect student stay with Hostel PG Tracker.
        </p>

        <form className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Full name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              required
              className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 outline-none focus:border-[#f47735]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Email address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              required
              className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 outline-none focus:border-[#f47735]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Password
            </label>
            <input
              type="password"
              placeholder="Create a password"
              required
              className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 outline-none focus:border-[#f47735]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Confirm password
            </label>
            <input
              type="password"
              placeholder="Re-enter your password"
              required
              className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 outline-none focus:border-[#f47735]"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-[#f47735] py-3 font-semibold text-black transition hover:bg-orange-400"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-[#f47735] hover:text-orange-400"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;