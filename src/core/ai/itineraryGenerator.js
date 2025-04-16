// 模拟AI生成行程（实际项目替换为真实API调用）
export function generateItinerary(destination) {
  const itineraries = {
    "上海": [
      { time: "09:00", place: "外滩", type: "景点", duration: "2小时" },
      { time: "12:00", place: "南京路步行街", type: "购物/午餐", duration: "1.5小时" }
    ],
    "北京": [
      { time: "10:00", place: "故宫", type: "景点", duration: "3小时" }
    ]
  };

  return {
    destination,
    days: [
      { 
        date: new Date().toLocaleDateString(), 
        schedule: itineraries[destination] || [] 
      }
    ],
    tips: `推荐携带：${destination.includes("海") ? "防晒霜" : "舒适运动鞋"}`
  };
}
