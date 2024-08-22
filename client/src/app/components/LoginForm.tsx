'use client';

export default function LoginForm() {
  return (
    <form className="flex flex-col gap-4">
      <p className="antialiased text-xl text-gray-800 md:text-xl md:leading-normal text-center">
        LOGIN
      </p>
      <input
        type="email"
        placeholder="Email"
        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
      />
      <button
        type="submit"
        className="w-full rounded-lg bg-emerald-500 px-4 py-3 text-white hover:bg-emerald-600 text-sm"
      >
        Log in
      </button>
    </form>
  );
}
