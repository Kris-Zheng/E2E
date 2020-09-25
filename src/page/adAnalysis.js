const select = require('../action/select.js');
const calendar = require('../action/calendar.js');

const adAnalysis = () => {
  describe('账户花费页面', () => {
    it('操作成功', async () => {
      // const title = await page.title();
      // expect(title).toBe('数据中控');

      // 消息中心
      await page.waitForSelector('#root > div > section > aside > div > ul > li:nth-child(5)');
      await page.click('#root > div > section > aside > div > ul > li:nth-child(5)');

      await page.waitForSelector('#root > div > section > aside > div > ul > li:nth-child(5) > ul > li');
      await page.click('#root > div > section > aside > div > ul > li:nth-child(5) > ul > li > a');

      await page.waitForSelector('#root > div > section > section > div > main > div > div > div.antd-pro-utils-utils-op-row > div.antd-pro-components-prio-filter-index-operation > div > div:nth-child(2)');
      await page.click('#root > div > section > section > div > main > div > div > div.antd-pro-utils-utils-op-row > div.antd-pro-components-prio-filter-index-operation > div > div:nth-child(2)');

      await page.waitForSelector('ul[role=listbox]')
      await select('GY','li[role=option]');

      await page.waitForSelector('#root > div > section > section > div > main > div > div > div.antd-pro-utils-utils-op-row > div.antd-pro-components-prio-filter-index-operation > div > div:nth-child(3)');
      await page.click('#root > div > section > section > div > main > div > div > div.antd-pro-utils-utils-op-row > div.antd-pro-components-prio-filter-index-operation > div > div:nth-child(3)');

      await page.waitForSelector('ul[role=listbox]')
      await select('已分配','li[role=option]');
      
      await page.waitForSelector('#root > div > section > section > div > main > div > div > div.antd-pro-utils-utils-op-row > div.antd-pro-components-prio-filter-index-operation > div > div:nth-child(5)');
      await page.click('#root > div > section > section > div > main > div > div > div.antd-pro-utils-utils-op-row > div.antd-pro-components-prio-filter-index-operation > div > div:nth-child(5)');
      await page.evaluate(()=>{document.querySelector('input[placeholder=开始日期]').value='2020-7-10'});
      await page.evaluate(()=>{document.querySelector('input[placeholder=结束日期]').value='2020-7-30'});

      await page.waitForSelector('#root > div > section > section > div > main > div > div > div.antd-pro-utils-utils-op-row > div.antd-pro-components-prio-filter-index-operation > div > div:nth-child(6)');
      await page.click('#root > div > section > section > div > main > div > div > div.antd-pro-utils-utils-op-row > div.antd-pro-components-prio-filter-index-operation > div > div:nth-child(6)');
      

    });
  });
}

module.exports = adAnalysis