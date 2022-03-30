const ChatList = ({ chat, currentUser }) => {
  const flexClasses =
    chat.username !== currentUser ? "col-start-1 col-end-8 p-3 rounded-lg" : "col-start-6 col-end-13 p-3 rounded-lg";

  const chatBgClasses =
    chat.username === currentUser
      ? "bg-gray-900 text-white "
      
      : "bg-purple-200 w-full text-gray-700";

  return (
    <div class={flexClasses}>
      <div class="flex flex-row items-center">
        <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
        {chat.username?.chatAt(0)}
        </div>
        <div class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
          <div>{chat.message}</div>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
