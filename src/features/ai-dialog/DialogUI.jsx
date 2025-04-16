import { useDialogFlow } from './useDialogFlow';

export default function DialogUI() {
  const { messages, sendMessage } = useDialogFlow();
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage(input);
    setInput('');
  };

  return (
    <div className="dialog-container">
      {/* 消息记录 */}
      <div className="messages">
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.isUser ? 'user' : 'ai'}`}>
            <div className="text">{msg.text}</div>
            {msg.data && (
              <div className="itinerary-preview">
                <h4>{msg.data.destination}行程预览：</h4>
                <ul>
                  {msg.data.days[0].schedule.map((item, j) => (
                    <li key={j}>
                      [{item.time}] {item.place} ({item.type})
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 输入框 */}
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="输入目的地（如上海/北京）"
        />
        <button type="submit">发送</button>
      </form>
    </div>
  );
}
