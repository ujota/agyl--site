
import React, { useState, useRef, useEffect } from 'react';
import { askAgylAI } from '../services/gemini';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

export const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: 'Olá! Sou o Agyl-Bot. Como posso ajudar você hoje?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);
    const botResponse = await askAgylAI(userMsg);
    setMessages(prev => [...prev, { role: 'bot', text: botResponse || 'Algo deu errado.' }]);
    setIsLoading(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-blue-700 transition-all active:scale-90 relative"
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-robot'} text-xl sm:text-2xl`}></i>
      </button>
      {isOpen && (
        <div className="absolute bottom-16 left-0 w-[calc(100vw-32px)] sm:w-96 max-w-[380px] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden z-50">
          <div className="bg-blue-600 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <i className="fas fa-robot"></i>
              <span className="font-bold">Agyl-Bot</span>
            </div>
            <button onClick={() => setIsOpen(false)}><i className="fas fa-times"></i></button>
          </div>
          <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${m.role === 'user' ? 'bg-blue-600 text-white' : 'bg-white border shadow-sm'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-3 border-t bg-white flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Dúvidas?"
              className="flex-grow px-3 py-2 bg-gray-100 rounded-lg outline-none"
            />
            <button onClick={handleSend} disabled={isLoading} className="bg-blue-600 text-white p-2 rounded-lg">
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
