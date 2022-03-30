const Notifications = ({ onlineUsers, onlineUsersCount, usersRemoved }) => {
  return (
    <>
      <div>{onlineUsersCount} user(s) online now</div>

      <h2 className="font-bold mb-3">
        Notifications
      </h2>
      {onlineUsers.length ?
        <div className="bg-purple-50 rounded-sm pb-2 px-2">
          {onlineUsers.map((user, id) => (
            <div key={id}>
              <small className="leading-tight">
                {" "}
                <span className="text-indigo-500">{user.username}</span> just joined
                the chat from {user.userLocation}!
              </small>
            </div>
          ))}


          {/* show users leaving the chat */}
          {usersRemoved.map((user, id) => (
            <small key={id}>
              {" "}
              <span className="text-indigo-500">{user}</span> just left the chat!
            </small>
          ))}
        </div>
        : ""}
    </>
  );
};

export default Notifications;
