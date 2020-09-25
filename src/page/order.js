const select = require('../action/select.js');

const order = () => {
  describe('订单管理页面', () => {
    it('操作成功', async () => {
      // const title = await page.title();
      // expect(title).toBe('数据中控');
      await page.waitForSelector('#root > div > section > aside > div > ul > li:nth-child(3)');
      await page.click('#root > div > section > aside > div > ul > li:nth-child(3)');
      
      await page.waitForSelector('#root > div > section > aside > div > ul > li:nth-child(3) > ul > li > a');
      await page.click('#root > div > section > aside > div > ul > li:nth-child(3) > ul > li > a');
      
      await page.waitForSelector('.ant-select');
      await page.click('.ant-select');

      await select('无匹配','li[role=option]');

      await page.click('.ant-select');

      await select('成功','li[role=option]');

      await page.click('.ant-select');

      await select('失败','li[role=option]');

      await page.click('.ant-select');

      await select('进行中','li[role=option]');

      await page.waitForSelector('#root > div > section > section > div > main > div > div > div.ant-card > div > div.antd-pro-utils-utils-page-pagination > ul > li.ant-pagination-next > a');
      await page.click('#root > div > section > section > div > main > div > div > div.ant-card > div > div.antd-pro-utils-utils-page-pagination > ul > li.ant-pagination-next > a');

      await page.click('#root > div > section > section > div > main > div > div > div.ant-card > div > div.antd-pro-utils-utils-page-pagination > ul > li.ant-pagination-options > div.ant-select-sm.ant-pagination-options-size-changer.ant-select.ant-select-enabled');
      
      await select('50 条/页');
      
    });
  });
}

module.exports = order;