import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [input, setInput] = useState('');
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(false);

  const generatePlan = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:8000/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ destination: input })
      });
      const data = await response.json();
      setPlan(data);
    } catch (error) {
      console.error('获取旅行计划失败:', error);
      alert('获取旅行计划失败，请稍后重试');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>AI旅行规划师</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="输入目的地（如：上海3天）"
      />
      <button onClick={generatePlan} disabled={loading || !input.trim()}>
        {loading ? '生成中...' : '生成行程'}
      </button>
      
      {plan && (
        <div className="timeline">
          {plan.days.map((day, i) => (
            <div key={i}>
              <h3>第{i+1}天</h3>
              <p>{day.activities}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 