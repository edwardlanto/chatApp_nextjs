const LeftPanel = ({ sender, onSignOut }) => (
  <>
    <div className="flex flex-col justify-center items-center rounded-md">
      <div className="mb-3">
        <img
          className="rounded-full"
          src="https://peterbe.com/avatar.random.png"
          alt="Avatar"
        />
      </div>
      <p className="text-sm font-semibold mt-2">
        Hello, <span className="font-semibold">{sender}</span>
      </p>
      <div className="mt-4">
        <button
          onClick={onSignOut}
          className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
        >
          Sign out
        </button>
      </div>
    </div>

    <div className="mt-3">
      <h2 className="text-green-600">You&quot;re online.</h2>
    </div>
  </>
);

export default LeftPanel;
