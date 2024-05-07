const Message = () => {
  return (
    <>
      <div className="chat chat-start">
        <div className="chat-image">
            <img src="https://api.multiavatar.com/johndoe.png" alt="avatar" className="h-7 w-7"/>  
        </div>
        <div className="chat-bubble">
          ksbfkjcwe dsjfbcij ijebfvc ruuibfc <br />jjdbsfbkjdpsguvc
        </div>
        <time className="text-xs opacity-50">Sent at 12:45</time>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble">[oughfjbvc erifeqbgouiv jduiqfebv iug] <br />woefhincwe</div>
        <div className="chat-image">
            <img src="https://api.multiavatar.com/eshan.png" alt="avatar" className="h-7 w-7"/>
        </div>
        <time className="text-xs opacity-50">Seen at 12:46</time>
      </div>
    </>
  );
};

export default Message;
