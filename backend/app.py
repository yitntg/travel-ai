from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import openai
import os
from dotenv import load_dotenv

# 加载环境变量
load_dotenv()

# 设置OpenAI API密钥
openai.api_key = os.getenv("OPENAI_API_KEY")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
)

@app.post("/generate")
async def generate_plan(data: dict):
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{
            "role": "user",
            "content": f"用中文生成{data['destination']}旅行计划，按天分段"
        }]
    )
    return {"days": [
        {"activities": day} for day in 
        response.choices[0].message.content.split("\n\n") 
        if day.strip()
    ]}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app:app", host="0.0.0.0", port=8000, reload=True) 