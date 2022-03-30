import { useEffect, useState } from "react";
import Pusher from "pusher-js";
import SendMessage from "../components/SendMessage";
import ChatList from "../components/ChatList";
import LeftPanel from "../components/LeftPanel";
import Notifications from "../components/Notifications";
import { useRouter } from "next/router";

const Chat = ({ username, userLocation }) => {
  const router = useRouter();
  const pusher = new Pusher(process.env.NEXT_PUBLIC_KEY, {
    cluster: "us3",
    authEndpoint: `api/pusher/auth`,
    auth: {
      params: {
        username, userLocation
      }
    }
  });

  const [chats, setChats] = useState([]);
  const [onlineUsersCount, setOnlineUsersCount] = useState(0);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [usersRemoved, setUsersRemoved] = useState([]);

  useEffect(() => {
    if(!localStorage.getItem('chatAppUser')){
      router.push('/')
    }

    const channel = pusher.subscribe("presence-channel");
    channel.bind("pusher:subscription_succeeded", (members) => {
      setOnlineUsersCount(members.count);
    });

    channel.bind("pusher:member_added", (member) => {
      setOnlineUsersCount(channel.members.count);
      setOnlineUsers((prevState) => [
        ...prevState,
        { username: member.info.username, userLocation: member.info.userLocation },
      ]);
    });

    channel.bind("pusher:member_removed", (member) => {
      setOnlineUsersCount(channel.members.count);
      setUsersRemoved((prevState) => [...prevState, member.info.username]);
    });

    channel.bind("chat-update", function (data) {
      const { username, message } = data
      setChats((prevState) => [
        ...prevState,
        { username, message },
      ]);
    });

    return () => {
      pusher.unsubscribe("presence-channel");
    };
  }, []);

  const handleSignOut = () => {
    pusher.unsubscribe("presence-channel");
    localStorage.removeItem('chatAppUser');
    router.push("/");
  };

  return (
    <div class="flex h-screen antialiased text-gray-800">
      <div class="xs:flex-col md:flex sm:flex-row h-full w-full overflow-x-hidden">
        <div class="xs:w-full flex flex-col py-8 pl-6 pr-2 md:w-64 bg-white flex-shrink-0 ">
          <div class="flex flex-row items-center justify-center h-12 w-full">
            <div class="ml-2 font-bold text-2xl">Chat App</div>
          </div>
          <div
            class="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg"
          >   <LeftPanel sender={username} onSignOut={handleSignOut} />
            <Notifications
              onlineUsersCount={onlineUsersCount}
              onlineUsers={onlineUsers}
              usersRemoved={usersRemoved}
            />
          </div>

        </div>
        <div class="xs:h-5 md:h-full flex flex-col flex-auto p-6">
          <div
            class="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4"
          >
            <div class="flex flex-col h-full overflow-x-auto mb-4">
              <div class="flex flex-col h-full">
                <div class="grid grid-cols-12 gap-y-2">
                  {chats.map((chat, id) => (
                    <ChatList key={id} chat={chat} currentUser={username} />
                  ))}
                </div>
              </div>
            </div>
            <div
              class="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4"
            >

              <SendMessage
                username={username}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
