'use client'
import { useEffect, useRef } from "react";

export default function Home() {

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { 
    inputRef.current?.focus();
  }, []);


  const chatData = [
    { user: "What is your name?", assistant: "I'm Claude, an AI assistant created by Anthropic." },
    { user: "How can you help me?", assistant: "I can assist with writing, analysis, coding, math, and many other tasks." },
    { user: "What programming languages do you know?", assistant: "I'm familiar with many languages including Python, JavaScript, Java, C++, and more." },
    { user: "Can you help with math?", assistant: "Yes, I can help with calculations, algebra, statistics, and other mathematical problems." },
    { user: "Do you understand images?", assistant: "Yes, I can analyze and describe images that are shared in our conversation." },
    { user: "What's your knowledge cutoff date?", assistant: "My knowledge was last updated in April 2024." },
    { user: "Can you write code?", assistant: "Yes, I can write, review, and debug code in various programming languages." },
    { user: "Do you remember our conversations?", assistant: "No, I don't retain information between conversations." },
    { user: "Can you learn from our interactions?", assistant: "No, I don't learn or adapt from our conversations." },
    { user: "What languages can you speak?", assistant: "I can communicate in many languages, including English, Spanish, French, German, and more." },
    { user: "Can you create images?", assistant: "No, I can't create, generate, edit, manipulate or produce images." },
    { user: "Are you GPT?", assistant: "No, I'm Claude, created by Anthropic, not by OpenAI." },
    { user: "What's your purpose?", assistant: "I aim to be helpful while being direct, honest, and ethical in my interactions." },
    { user: "Can you solve complex problems?", assistant: "Yes, I can help break down and solve complex problems across various domains." },
    { user: "Do you have emotions?", assistant: "I aim to be direct: I don't experience emotions like humans do." },
    { user: "Can you write essays?", assistant: "Yes, I can help write essays on various topics with proper structure and research." },
    { user: "Do you have personal opinions?", assistant: "I can engage with topics while remaining objective and transparent about my limitations." },
    { user: "Can you explain difficult concepts?", assistant: "Yes, I can break down complex topics into understandable explanations." },
    { user: "What are your limitations?", assistant: "I can't browse the internet, create images, or retain information between chats." },
    { user: "How accurate are your responses?", assistant: "I strive for accuracy but can make mistakes and will acknowledge when I'm uncertain." }
  ];

 const chat = () => {
  return (
    <div className="h-[calc(100vh-250px)] w-full flex flex-col justify-between items-start border-pattern ">
      <div className="overflow-y-auto h-[calc(100vh-270px)] w-full flex flex-col gap-2 p-2">
        {chatData.map((data, index) => (
          <div key={index} className="flex flex-col gap-2 w-full items-start font-semibold">
            <div className="bg-yellow text-white p-2 rounded-tr-lg rounded-br-lg rounded-bl-lg">
              {data.user}
            </div>
            <div className="bg-gray-100 text-black p-2 rounded-tr-lg rounded-bl-lg rounded-br-lg">
              {data.assistant}
            </div>
          </div>
        ))}
      </div>


      <input ref={inputRef} type="text" className="w-full p-2 border-t-2 border-gray focus:outline-none focus:border-t-2 focus:border-yellow" placeholder="Ask me anything" />
    </div>
  )
 } 

return <div className="flex flex-col justify-center gap-6">

    <h1 className="text-xl font-extrabold text-green text-center">Ask Away, Know Me!!!</h1>


    {chat()}

  </div>;
}
