// pages/personality/personality.js
const questions = [
  {
    question: "在社交聚会上，你通常会？",
    options: ["主动认识很多人", "和熟悉的人交流", "观察他人，不太主动", "视心情而定"],
    type: "EI",
    scores: [2, 1, -1, 0]
  },
  {
    question: "你更喜欢通过什么方式获取信息？",
    options: ["具体事实和数据", "整体概念和可能性", "两者结合", "看情况"],
    type: "SN",
    scores: [2, -2, 0, 0]
  },
  {
    question: "做决定时，你更倾向于？",
    options: ["逻辑分析和客观标准", "个人价值观和他人感受", "综合考虑", "凭直觉"],
    type: "TF",
    scores: [2, -2, 0, 0]
  },
  {
    question: "你的生活方式更偏向？",
    options: ["有计划、有条理", "灵活、随性", "有计划但可调整", "看心情"],
    type: "JP",
    scores: [2, -2, 0, 0]
  },
  {
    question: "能量来源更多来自？",
    options: ["与他人互动", "独处思考", "平衡两者", "不确定"],
    type: "EI",
    scores: [2, -2, 0, 0]
  },
  {
    question: "你更关注？",
    options: ["现实和实际", "未来和可能性", "两者兼顾", "当下"],
    type: "SN",
    scores: [2, -2, 0, 0]
  },
  {
    question: "面对冲突时，你会？",
    options: ["坚持原则和逻辑", "考虑他人感受", "寻求平衡", "回避"],
    type: "TF",
    scores: [2, -2, 0, 0]
  },
  {
    question: "工作任务来临时，你习惯？",
    options: ["立即制定计划", "先开始再说", "思考清楚再行动", "看情况"],
    type: "JP",
    scores: [2, -2, 0, 0]
  },
  {
    question: "你更喜欢的工作环境是？",
    options: ["团队合作、热闹", "独立空间、安静", "灵活切换", "无所谓"],
    type: "EI",
    scores: [2, -2, 0, 0]
  },
  {
    question: "学习新东西时，你偏好？",
    options: ["具体步骤和实例", "理论框架和概念", "实践探索", "混合方式"],
    type: "SN",
    scores: [2, -2, 0, 0]
  },
  {
    question: "评价他人时，你更注重？",
    options: ["能力和逻辑", "品格和态度", "综合考量", "第一印象"],
    type: "TF",
    scores: [2, -2, 0, 0]
  },
  {
    question: "假期安排，你倾向于？",
    options: ["详细规划行程", "随性而行", "大致计划", "临时决定"],
    type: "JP",
    scores: [2, -2, 0, 0]
  },
  {
    question: "遇到问题时，你首先？",
    options: ["找人讨论", "自己思考", "先查资料", "放一放"],
    type: "EI",
    scores: [2, -2, 0, 0]
  },
  {
    question: "你更相信？",
    options: ["经验和事实", "直觉和灵感", "两者结合", "实践验证"],
    type: "SN",
    scores: [2, -2, 0, 0]
  },
  {
    question: "做决策时，什么更重要？",
    options: ["公平和正义", "和谐和人情", "都重要", "效率"],
    type: "TF",
    scores: [2, -2, 0, 0]
  },
  {
    question: "你的办公桌通常？",
    options: ["整洁有序", "有些凌乱但知道在哪", "很乱", "极简"],
    type: "JP",
    scores: [2, -1, -2, 0]
  },
  {
    question: "参加活动时，你更喜欢？",
    options: ["认识新朋友", "和老朋友聊天", "两者都有", "观察为主"],
    type: "EI",
    scores: [2, -1, 0, -2]
  },
  {
    question: "阅读时，你偏好？",
    options: ["具体描述和细节", "抽象概念和主题", "故事情节", "实用信息"],
    type: "SN",
    scores: [2, -2, 0, 0]
  },
  {
    question: "朋友难过时，你会？",
    options: ["分析原因给建议", "倾听和安慰", "陪伴", "转移注意力"],
    type: "TF",
    scores: [2, -2, 0, 0]
  },
  {
    question: "项目截止前，你通常？",
    options: ["提前完成", "按时完成", "赶在最后", "需要延期"],
    type: "JP",
    scores: [2, 1, -1, -2]
  }
];

const mbtiTypes = {
  "ISTJ": { name: "物流师", desc: "安静、严肃，通过全面性和可靠性获得成功。实际、实事求是。", careers: ["会计师", "审计师", "程序员", "工程师", "法官", "军官"] },
  "ISFJ": { name: "守卫者", desc: "安静、友好、负责任和有良心。坚定地致力于完成义务。", careers: ["护士", "教师", "社工", "行政人员", "图书管理员"] },
  "INFJ": { name: "提倡者", desc: "寻求思想、关系和物质之间的意义和联系。忠诚于自己的价值观。", careers: ["作家", "心理咨询师", "艺术家", "人力资源", "研究员"] },
  "INTJ": { name: "建筑师", desc: "有独创性的思想家，有强烈的驱动力实现自己的想法和目标。", careers: ["科学家", "工程师", "战略顾问", "投资银行家", "企业家"] },
  "ISTP": { name: "鉴赏家", desc: "灵活、忍耐力强，是个安静的观察者直到问题出现。", careers: ["机械师", "工程师", "程序员", "侦探", "运动员"] },
  "ISFP": { name: "探险家", desc: "安静、友好、敏感、和善。享受当下，喜欢有自己的空间。", careers: ["艺术家", "设计师", "厨师", "护士", "园艺师"] },
  "INFP": { name: "调停者", desc: "理想主义，对自己价值观以外的事物很少有兴趣。", careers: ["作家", "编辑", "心理咨询师", "艺术家", "社会工作者"] },
  "INTP": { name: "逻辑学家", desc: "对知识有强烈的渴望，喜欢理论和抽象的思考。", careers: ["科学家", "数学家", "程序员", "哲学家", "研究员"] },
  "ESTP": { name: "企业家", desc: "灵活、忍耐力强，采用实际的方法关注即时结果。", careers: ["销售", "企业家", "警察", "运动员", "演员"] },
  "ESFP": { name: "表演者", desc: "外向、友好、接受力强。热爱生活、人和物质享受。", careers: ["演员", "销售", "活动策划", "导游", "健身教练"] },
  "ENFP": { name: "竞选者", desc: "热情洋溢、富有想象力。认为生活充满可能性。", careers: ["记者", "演员", "公关", "教师", "创业者"] },
  "ENTP": { name: "辩论家", desc: "反应快、睿智，有战略眼光。喜欢智力挑战。", careers: ["律师", "企业家", "顾问", "发明家", "营销人员"] },
  "ESTJ": { name: "总经理", desc: "实际、现实主义。果断，一旦下决心就会马上行动。", careers: ["管理者", "军官", "法官", "银行家", "项目经理"] },
  "ESFJ": { name: "执政官", desc: "热心肠、有责任心、合作。希望环境温馨和谐。", careers: ["教师", "医护", "销售", "人力资源", "活动策划"] },
  "ENFJ": { name: "主人公", desc: "热情、为他人着想、反应敏捷。有领导力，能帮助他人发挥潜力。", careers: ["教师", "培训师", "销售", "人力资源", "心理咨询师"] },
  "ENTJ": { name: "指挥官", desc: "坦诚、果断，是天生的领导者。能快速发现不合理的地方。", careers: ["CEO", "管理者", "律师", "顾问", "企业家"] }
};

Page({
  data: {
    questions: questions,
    currentQuestion: 0,
    selected: null,
    scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 },
    showResult: false,
    resultType: '',
    resultDesc: '',
    careers: [],
    progress: 0
  },

  onLoad: function () {
    this.setData({ progress: 0 });
  },

  selectOption: function (e) {
    this.setData({ selected: e.currentTarget.dataset.index });
  },

  submitAnswer: function () {
    const { currentQuestion, selected, questions, scores } = this.data;
    const question = questions[currentQuestion];
    const score = question.scores[selected];

    // 计算维度分数
    const dimension = question.type;
    const dim1 = dimension.charAt(0);
    const dim2 = dimension.charAt(1);

    const newScores = { ...scores };
    if (score > 0) {
      newScores[dim1] += score;
    } else if (score < 0) {
      newScores[dim2] += Math.abs(score);
    }

    this.setData({ scores: newScores });

    if (currentQuestion < questions.length - 1) {
      this.setData({
        currentQuestion: currentQuestion + 1,
        selected: null,
        progress: ((currentQuestion + 1) / questions.length) * 100
      });
    } else {
      this.calculateResult();
    }
  },

  calculateResult: function () {
    const { scores } = this.data;
    const type = 
      (scores.E >= scores.I ? 'E' : 'I') +
      (scores.S >= scores.N ? 'S' : 'N') +
      (scores.T >= scores.F ? 'T' : 'F') +
      (scores.J >= scores.P ? 'J' : 'P');

    const result = mbtiTypes[type];
    this.setData({
      showResult: true,
      resultType: `${type} - ${result.name}`,
      resultDesc: result.desc,
      careers: result.careers,
      progress: 100
    });

    // 保存结果
    const results = wx.getStorageSync('testResults') || {};
    results.personality = { type, ...result };
    wx.setStorageSync('testResults', results);
  },

  goHome: function () {
    wx.navigateBack({ delta: 1 });
  },

  nextTest: function () {
    wx.navigateTo({ url: '/pages/career-prefer/career-prefer' });
  }
});
