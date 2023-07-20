import ChatField, { User } from './components/ChatField/ChatField'
import Profile from '../src/assets/profile.png'
import { SetStateAction, useState } from 'react';

export type Message = {
  user: string;
  message: string;
};

function App() {

  const user: User = {
    name: 'Juliana',
    img: Profile
  }

  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);

  const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    const message: Message = {
      user: user.name,
      message: inputValue,
    };

    setMessages([...messages, message]);
  };




  return (
    <>
      <ChatField user={user} onChange={handleChange} submit={handleSubmit} />
      <pre>{`${JSON.stringify(messages)}`}</pre>
    </>
  )
}

export default App
