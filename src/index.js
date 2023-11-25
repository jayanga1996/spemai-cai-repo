import React from 'react'
import styles from './styles.module.css'
import ChatContainer from './components/ChatContainer';
// import chat_icon from './assets/Frame 5182.png'
// import chat_close_icon from '../src/assets/Group 3178.png'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}
export const Capitalize = ({ str }) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
 export const SpemaiChatSdk =()=> {
  const [isOpen, setIsOpen] = useState(true);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="chat-popup">
      <div className='icon-set'>
      {/* {!isOpen && (
      <img src={chat_icon} className='chat-icon'  onClick={toggleChat}></img>
      )}
      {isOpen && (
        // <button className="chat-icon" onClick={toggleChat}>
        //   Chat
        // </button>
        <img src={chat_close_icon} className='chat-close-icon'  onClick={toggleChat}></img>
      )} */}
      </div>
     
      {isOpen && (
        <div className="chat-window">
          <ChatContainer />
          
        </div>
      )}
    </div>
  );
}