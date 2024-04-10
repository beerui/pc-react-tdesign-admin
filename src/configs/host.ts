export default {
  mock: {
    // 本地mock数据
    API: '',
  },
  development: {
    // 开发环境接口请求
    API: '/BASE_URL',
  },
  test: {
    // 测试环境接口地址
    API: 'https://xiaoshan-dev.anthead.net/open/api/v1',
  },
  release: {
    // 正式环境接口地址
    API: 'https://xiaoshan-dev.anthead.net/open/api/v1',
  },
  site: {
    // TDesign部署特殊需要 与release功能一致
    API: '',
  },
};
