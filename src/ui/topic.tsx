import { ReactNode, useState } from "react";
import { capitalize } from "@mui/material";
import Confetti from 'react-confetti'

interface TopicProps {
  name: string;
  children?: ReactNode | string | string[];
}

export default function Topic({ name, children }: TopicProps) {
  
  function convertToComponent(text: string) {
    return text.split('\n').map((line, index) => 
      line ? <p key={index}>{line}</p> : <br key={index} />
    );
  }

  const childArray = typeof children === 'string' ? [children] : (Array.isArray(children) ? children : [children]);

  return (
    <div id={name} className="topic">
      <h1>{capitalize(name)}</h1>
      {childArray && childArray.map((child, index) => (
        typeof child === 'string' ? (
          <div key={`child-${index}`}>{convertToComponent(child)}</div>
        ) : (
          <section key={`child-${index}`}>{child}</section>
        )
      ))}
    </div>
  );
}

export function GuessTheNumber() {
  const [inputValue, setInputValue] = useState<string>('');
  const [feedback, setFeedback] = useState<string>('');
  const [numberToGuess] = useState<number>(Math.floor(Math.random() * 100));
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault(); // Prevent the default form submission behavior
    clearTimeout(timeoutId); // Clear the previous timeout
    guess();
  }
  
  let timeoutId: ReturnType<typeof setTimeout>; // Define timeoutId outside the component function
  
  function guess() {
    const guessedNumber = parseInt(inputValue, 10);
    if (!isNaN(guessedNumber)) {
      if (guessedNumber === numberToGuess) {
        setFeedback('Congratulations! You guessed the correct number!');
        setShowConfetti(true); // Show confetti if the number is guessed correctly
      } else if (guessedNumber < numberToGuess) {
        setFeedback('Too low. Try again.');
      } else {
        setFeedback('Too high. Try again.');
      }
    } else {
      setFeedback('Please enter a valid number.');
    }
    setInputValue('');
    timeoutId = setTimeout(() => {
      setFeedback('');
    }, 1500);
  }
  return (
    <form onSubmit={handleSubmit} style={{display:'flex',gap:'10px',alignItems:'center'}}>
      <input 
        type="text" 
        placeholder='Enter a number.'
        value={inputValue} 
        onChange={handleInputChange} 
        size={10}
      />
      <button type="submit">Guess!</button>
      <p>{feedback}</p>
      {showConfetti && <Confetti style={{position:'fixed'}} width={window.innerWidth} height={window.innerWidth} tweenDuration={100}/>}
    </form>
  );
}
