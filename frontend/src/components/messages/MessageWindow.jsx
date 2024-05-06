import Header from "./Header";
import ConvoBox from "./ConvoBox";
import InputModel from "./InputModel";

const MessageWindow = () => {
  return (
    <div className="hidden w-full h-full p-3 lg:w-2/3 lg:h-full lg:flex lg:flex-col">
        <Header/>
        <ConvoBox/>
        <InputModel/>
      </div>
  )
}

export default MessageWindow