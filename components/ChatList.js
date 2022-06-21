const ChatList = ({ chat, currentUser }) => {
  const flexClasses =
    chat.username !== currentUser ? "col-start-1 col-end-8 p-3 rounded-lg" : "col-start-6 col-end-13 p-3 rounded-lg flex justify-end";
  const letter = localStorage.getItem('chatAppUser').charAt(0);
  return (
    <div className={flexClasses}>
      <div className="flex flex-row items-center">
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
        {letter} 
        </div>
        <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
          <div>{chat.message}</div>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
