
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
            <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#1C1C1C] p-8">
                <Link to="/" className="text-sm text-[#f47735]">
                    ← Back to home
                </Link>

                <h1 className="mt-8 text-3xl font-bold">
                    Welcome back
                </h1>

                <p className="mt-2 text-gray-400">
                    Login to your Hostel PG Tracker account.
                </p>

                <form className="mt-8 space-y-5">
                    <div>
                        <label className="mb-2 block text-sm text-gray-300">
                            Email address
                        </label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 outline-none focus:border-[#f47735]"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm text-gray-300">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 outline-none focus:border-[#f47735]"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-xl bg-[#f47735] py-3 font-semibold text-black transition hover:bg-orange-400"
                    >
                        Login
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-400">
                    Don't have an account?{" "}
                    <Link to="/signup" className="font-semibold text-[#f47735]">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
