// pages/index/index.js
Page({
  data: {
    tests: [
      { id: 'personality', name: '性格测试', icon: '🎭', completed: false },
      { id: 'careerPrefer', name: '职业偏好', icon: '💼', completed: false },
      { id: 'aiFit', name: 'AI 适配度', icon: '🤖', completed: false },
      { id: 'aiReplace', name: 'AI 取代风险', icon: '⚠️', completed: false },
      { id: 'aiUsage', name: 'AI 应用调查', icon: '📊', completed: false }
    ]
  },

  onLoad: function () {
    this.loadTestStatus();
  },

  onShow: function () {
    this.loadTestStatus();
  },

  loadTestStatus: function () {
    const results = wx.getStorageSync('testResults') || {};
    const tests = this.data.tests.map(test => ({
      ...test,
      completed: !!results[test.id]
    }));
    this.setData({ tests });
  },

  startTest: function (e) {
    const type = e.currentTarget.dataset.type;
    const pageMap = {
      personality: '/pages/personality/personality',
      careerPrefer: '/pages/career-prefer/career-prefer',
      aiFit: '/pages/ai-fit/ai-fit',
      aiReplace: '/pages/ai-replace/ai-replace',
      aiUsage: '/pages/ai-usage/ai-usage'
    };

    wx.navigateTo({
      url: pageMap[type]
    });
  }
});
