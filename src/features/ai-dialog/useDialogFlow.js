import { generateItinerary } from '@/core/ai/itineraryGenerator';

export function useDialogFlow() {
  const [messages, setMessages] = useState([]);
  
  const sendMessage = async (text) => {
    // 用户消息
    setMessages(prev => [...prev, { text, isUser: true }]);
    
    // AI回复
    const itinerary = generateItinerary(text);
    const aiMessage = {
      text: `为您生成${text}的行程：`,
      isUser: false,
      data: itinerary  // 结构化数据供后续使用
    };
    
    setMessages(prev => [...prev, aiMessage]);
    return itinerary;
  };

  return { messages, sendMessage };
}
