// Create a file called datafeed.js duplicating this file and replace the values below

module.exports = {
  development: {
    navServiceUrl: '[STAGING URL]',
    dataFeedAddress: '',
  },
  ropsten: {
    navServiceUrl: 'json(https://api.myjson.com/bins/8kqui).0',
    dataFeedAddress: '0x0a70adbf111359f18dd9457c91ae6be3255132b9',
  },
  mainnet: {
    navServiceUrl: '[PRODUCTION URL]',
    dataFeedAddress: '',
  },
};
