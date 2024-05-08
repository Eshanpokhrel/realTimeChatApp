
const ChatSkeleton = () => {
  return (
    <>
    <div className="flex flex-col gap-2 w-full mt-10">
      <div className="flex gap-4 items-center">
        <div className="skeleton w-10 h-10 rounded-full shrink-0"></div>
        <div className="flex flex-col gap-4">
          <div className="skeleton h-12 w-32"></div>
          <div className="skeleton h-12 w-32"></div>
        </div>
      </div>
    </div>
    <div className="flex flex-col items-end gap-2 w-full mt-10">
      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          <div className="skeleton h-12 w-32"></div>
          <div className="skeleton h-12 w-32"></div>
        </div>
        <div className="skeleton w-10 h-10 rounded-full shrink-0"></div>
      </div>
    </div>
    <div className="flex flex-col gap-2 w-full mt-10">
      <div className="flex gap-4 items-center">
        <div className="skeleton w-10 h-10 rounded-full shrink-0"></div>
        <div className="flex flex-col gap-4">
          <div className="skeleton h-12 w-32"></div>
          <div className="skeleton h-12 w-32"></div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ChatSkeleton;
