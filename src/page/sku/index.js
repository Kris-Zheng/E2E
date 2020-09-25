const product = require('./product/index');
const skuCombination = require('./skuCombination/index');
const skuList = require('./skuList/index')

// 不同账号模块URL
const url = account.ph.url;

const root = (url) => {
  describe('SKU管理', () => {
    it('跳转成功', async () => {
      await page.waitForSelector(url);
      await page.click(url);
    });
  });
}

const index = () => {
  switch (url) {
    case '#root > div > section > aside > div > ul > li:nth-child(3)':
      root(url);
      product(url);
      skuCombination(url);
      break;

    case '#root > div > section > aside > div > ul > li:nth-child(2)':
      root(url);
      product(url);
      skuList(url);
      skuCombination(url);
      break;
  }
}

module.exports = index