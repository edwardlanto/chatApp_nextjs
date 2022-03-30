import Button from "../components/Button";

export default function Login({ handleLogin, handleLoginChange }) {
  return (
<div class="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
  <div class="w-full sm:max-w-md p-5 mx-auto">
    <h2 class="mb-12 text-center text-5xl font-extrabold">Welcome.</h2>
    <form   onSubmit={handleLogin}>
      <div class="mb-4">
        <label class="block mb-1" for="username">Username</label>
        <input id="username"  onChange={handleLoginChange} type="text" name="username" class="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
      </div>
      <div class="mt-6">
        <button class="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0 w-full">Sign In</button>
      </div>
    </form>
  </div>
</div>
  );
}
