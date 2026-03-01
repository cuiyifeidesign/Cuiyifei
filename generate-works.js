const fs = require("fs");
const path = require("path");

const worksDir = "src/content/works";

// 确保目录存在
if (!fs.existsSync(worksDir)) {
  fs.mkdirSync(worksDir, { recursive: true });
}

// 定义18个作品的数据
const works = [
  {
    title: "现代简约客厅设计",
    description: "简洁线条与自然光线交织，营造宁静舒适的居住氛围",
    image: "https://picsum.photos/id/1043/800/600",
    year: "2024",
    category: "室内设计",
    content:
      "本案以白色和原木色为主调，搭配黑色线条点缀。大面积的落地窗引入充足光线，使空间通透轻盈。沙发背景墙采用简单的线条分割，与整体风格统一。家具选择注重功能与美学平衡，每一件都经过精心搭配。",
  },
  {
    title: "北欧风卧室",
    description: "柔和色彩与天然材质，打造温馨睡眠空间",
    image: "https://picsum.photos/id/1044/800/600",
    year: "2023",
    category: "室内设计",
    content:
      "卧室以浅灰和米色为基调，搭配原木家具和棉麻织物。床头背景墙采用简单的石膏线条，增加层次感。暖色调灯光营造出放松的氛围，让人一进入便感到安心。",
  },
  {
    title: "新中式书房",
    description: "传统元素与现代工艺结合，书香与禅意并存",
    image: "https://picsum.photos/id/1045/800/600",
    year: "2024",
    category: "室内设计",
    content:
      "书房采用深色木质书柜与浅色墙面形成对比。中式元素的窗棂、书法挂画点缀其间，现代书桌与明式圈椅搭配，既有传统韵味又不失舒适。百叶窗调节光线，营造静谧阅读环境。",
  },
  {
    title: "轻奢风餐厅",
    description: "金属与石材碰撞，精致生活由此开始",
    image: "https://picsum.photos/id/1049/800/600",
    year: "2023",
    category: "室内设计",
    content:
      "餐厅以灰绿色墙面为背景，搭配大理石餐桌和丝绒餐椅。黄铜吊灯和装饰镜增添轻奢质感。餐边柜采用玻璃柜门，展示精美餐具，整体空间优雅而富有情调。",
  },
  {
    title: "工业风厨房",
    description: "裸露结构与现代电器，粗犷中的精致",
    image: "https://picsum.photos/id/1050/800/600",
    year: "2024",
    category: "室内设计",
    content:
      "厨房保留原始水泥天花板和裸露管道，搭配黑色橱柜和不锈钢台面。中岛台使用做旧木材，工业风吊灯提供照明。现代电器嵌入其中，实用与个性兼具。",
  },
  {
    title: "日式原木卫浴",
    description: "自然材质与柔和灯光，洗去一身疲惫",
    image: "https://picsum.photos/id/1051/800/600",
    year: "2023",
    category: "室内设计",
    content:
      "卫浴空间以原木色防水板覆盖墙面，搭配白色洁具。浴缸旁设置木质搁板，放置香薰和毛巾。暖色灯光通过间接照明营造温泉般的氛围，让人彻底放松。",
  },
  {
    title: "现代玄关设计",
    description: "第一眼的惊艳，功能与美学的结合",
    image: "https://picsum.photos/id/1052/800/600",
    year: "2024",
    category: "室内设计",
    content:
      "玄关采用悬空鞋柜设计，底部留空方便放置常用鞋。墙面装饰一幅抽象画，搭配换鞋凳和穿衣镜。地面使用六角砖与客厅木地板拼接，区分空间且美观。",
  },
  {
    title: "阳台休闲区",
    description: "阳光与绿植，城市里的秘密花园",
    image: "https://picsum.photos/id/1053/800/600",
    year: "2023",
    category: "室内设计",
    content:
      "阳台铺设防腐木地板，放置藤编沙发和小茶几。墙面安装垂直绿植架，种植多种绿植。遮阳帘可调节光线，午后在此读书喝茶，惬意十足。",
  },
  {
    title: "儿童房设计",
    description: "色彩与趣味，陪伴孩子快乐成长",
    image: "https://picsum.photos/id/1054/800/600",
    year: "2024",
    category: "室内设计",
    content:
      "儿童房以淡蓝色为主调，搭配云朵造型吊灯。定制床铺带有储物抽屉，书桌靠窗设置。墙面预留涂鸦区，家具圆角处理确保安全，充满童趣。",
  },
  {
    title: "衣帽间设计",
    description: "有序收纳，每日穿搭的仪式感",
    image: "https://picsum.photos/id/1055/800/600",
    year: "2023",
    category: "室内设计",
    content:
      "衣帽间采用开放式布局，挂衣区、叠放区、鞋包区划分清晰。中央岛台放置首饰和配饰。暖色灯带营造高级感，玻璃柜门防尘且美观。",
  },
  {
    title: "影音室设计",
    description: "沉浸式观影，私人影院体验",
    image: "https://picsum.photos/id/1056/800/600",
    year: "2024",
    category: "室内设计",
    content:
      "影音室墙面采用深色吸音板，天花板做星空顶。真皮沙发搭配电动升降茶几，投影幕布隐藏于吊顶。环绕立体声音响系统，打造极致视听享受。",
  },
  {
    title: "健身房设计",
    description: "在家也能享受专业运动体验",
    image: "https://picsum.photos/id/1057/800/600",
    year: "2023",
    category: "室内设计",
    content:
      "健身房铺设专业运动地板，墙面安装整面镜墙，方便矫正动作。配置跑步机、动感单车和力量训练架。通风系统保证空气流通，角落设置休息区。",
  },
  {
    title: "茶室设计",
    description: "品茗静心，东方禅意空间",
    image: "https://picsum.photos/id/1058/800/600",
    year: "2024",
    category: "室内设计",
    content:
      "茶室铺设榻榻米，放置低矮茶桌和蒲团。墙面悬挂书法卷轴，博古架陈列茶具。竹帘过滤光线，营造静谧氛围。窗外若能有小景，更添意境。",
  },
  {
    title: "工作室设计",
    description: "创意与效率并存的办公空间",
    image: "https://picsum.photos/id/1059/800/600",
    year: "2023",
    category: "室内设计",
    content:
      "工作室采用L型工作台，墙面安装洞洞板收纳工具和灵感图片。充足的自然光配合可调角度台灯，减少眼部疲劳。白板墙方便随时记录灵感，整体高效且舒适。",
  },
  {
    title: "走廊设计",
    description: "狭长空间的巧妙利用",
    image: "https://picsum.photos/id/1060/800/600",
    year: "2024",
    category: "室内设计",
    content:
      "走廊墙面设置照片墙或艺术画廊，尽头放置端景桌。顶部安装筒灯提供均匀照明，地面采用与客厅一致的木地板，延伸视觉。若有空间，可设置嵌入式书柜。",
  },
  {
    title: "楼梯间设计",
    description: "上下空间的过渡艺术",
    image: "https://picsum.photos/id/1061/800/600",
    year: "2023",
    category: "室内设计",
    content:
      "楼梯采用悬浮式设计，木质踏板搭配玻璃护栏，轻盈通透。楼梯下方空间改造为储物区或小型阅读角。墙面设置艺术装饰，每一步都充满设计感。",
  },
  {
    title: "阁楼改造",
    description: "斜顶下的温馨小天地",
    image: "https://picsum.photos/id/1062/800/600",
    year: "2024",
    category: "室内设计",
    content:
      "阁楼保留原始木梁，墙面刷白扩大视觉。利用斜顶下方设置矮柜和床铺，天窗引入自然光。铺设柔软地毯，成为阅读、听音乐的私密空间。",
  },
  {
    title: "地下室休闲厅",
    description: "地下空间的多元可能",
    image: "https://picsum.photos/id/1063/800/600",
    year: "2023",
    category: "室内设计",
    content:
      "地下室改造为多功能休闲厅，包含吧台、台球桌和影音区。墙面使用防潮材料，地面铺设瓷砖。暗藏灯带营造氛围，成为家庭聚会和朋友派对的理想场所。",
  },
];

// 生成 interior 文件
works.forEach((work, index) => {
  const fileName = `interior-${String(index + 1).padStart(2, "0")}.md`;
  const filePath = path.join(worksDir, fileName);

  const content = `---
title: "${work.title}"
description: "${work.description}"
image: "${work.image}"
year: "${work.year}"
category: "${work.category}"
---

${work.content}
`;

  fs.writeFileSync(filePath, content, "utf8");
  console.log(`生成文件: ${fileName}`);
});

// 生成 banner 文件
const bannerPath = path.join(worksDir, "banner.md");
const bannerContent = `---
title: "横幅标题占位"
description: "横幅描述占位，请替换为实际内容"
image: "https://picsum.photos/id/1040/800/600"
year: "2024"
category: "室内设计"
---

横幅正文占位，请替换为实际内容。
`;
fs.writeFileSync(bannerPath, bannerContent, "utf8");
console.log(`生成文件: banner.md`);

console.log(`已生成 ${works.length + 1} 个作品文件`);