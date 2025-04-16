/**
 * AI提示词工程库
 * 包含结构化提示模板和参数校验规则
 */

// 主提示词模板
export const MAIN_PROMPT = ({ destination, days, style }) => `
你是一个专业旅行规划AI，请为${destination}生成${days}日深度游行程，要求：

**基础要求**：
1. 每日包含3-4个核心景点，按地理位置优化顺序
2. 标注每个景点的建议停留时间（如1.5小时）
3. 区分必玩项目和可选项目

**游客风格适配**：
${style === 'family' ? '• 适合家庭游玩，包含亲子活动场所' : ''}
${style === 'adventure' ? '• 侧重探险类活动，如徒步、潜水等' : ''}
${style === 'foodie' ? '• 包含当地特色餐厅和夜市推荐' : ''}

**输出格式**（严格遵循JSON格式）：
{
  "destination": "${destination}",
  "days": [
    {
      "date": "YYYY-MM-DD",
      "theme": "当日主题",
      "schedule": [
        {
          "time": "09:00",
          "place": "景点名称",
          "type": "museum/park/food...",
          "duration": "建议时长",
          "mustVisit": boolean
        }
      ]
    }
  ],
  "advice": {
    "clothing": "穿衣建议",
    "transport": "交通提示"
  }
}
`;

// 子提示词（特殊场景）
export const SUB_PROMPTS = {
  WEATHER: (city) => `用中文简述${city}未来48小时天气，给出3条穿衣建议，格式：
  ## ${city}天气建议
  - **温度范围**：X°C ~ Y°C
  - **降水概率**：X%
  - **推荐着装**：1... 2... 3...`,

  BUDGET: (budget) => `所有推荐项目总花费需控制在${budget}元内，按【性价比优先级】排序`
};

// 输入校验规则
export const VALIDATION = {
  destination: (input) => /^[\u4e00-\u9fa5a-zA-Z]{2,20}$/.test(input),
  days: (num) => num >= 1 && num <= 30
};
