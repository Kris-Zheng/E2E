const select = require('../action/select.js');
const calendar = require('../action/calendar.js');

const message = () => {
  describe('消息中心页面', () => {
    it('操作成功', async () => {
      // const title = await page.title();
      // expect(title).toBe('数据中控');

      // 消息中心
      await page.waitForSelector('#root > div > section > aside > div > ul > li:nth-child(12) > a');
      await page.click('#root > div > section > aside > div > ul > li:nth-child(12) > a');
      await page.waitForSelector('#root > div > section > section > div > main > div > div > div.ant-tabs-content.ant-tabs-content-animated.ant-tabs-top-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div.ant-card.ant-card-hoverable > div.ant-card-head > div > div.ant-card-head-title > button');
      await page.click('#root > div > section > section > div > main > div > div > div.ant-tabs-content.ant-tabs-content-animated.ant-tabs-top-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div.ant-card.ant-card-hoverable > div.ant-card-head > div > div.ant-card-head-title > button')

      await page.click('#type > div');

      await select('公司人员', 'li[role=option]');

      await page.waitForSelector('#message');
      await page.click('#message');
      await page.type('#message', 'aaaaaaaaaa');
      await page.click('body > div:nth-child(5) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-footer > div > button.ant-btn.ant-btn-primary');
      await page.waitForSelector('body > div:nth-child(9) > div > div.ant-modal-wrap > div > div.ant-modal-content > div > div > div.ant-modal-confirm-btns > button.ant-btn.ant-btn-primary');
      await page.click('body > div:nth-child(9) > div > div.ant-modal-wrap > div > div.ant-modal-content > div > div > div.ant-modal-confirm-btns > button.ant-btn.ant-btn-primary');

      await page.waitForSelector('#root > div > section > section > div > main > div > div > div.ant-tabs-content.ant-tabs-content-animated.ant-tabs-top-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div.ant-card.ant-card-hoverable > div.ant-card-body > div.ant-table-wrapper > div > div > div > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(7) > button:nth-child(2)');
      await page.click('#root > div > section > section > div > main > div > div > div.ant-tabs-content.ant-tabs-content-animated.ant-tabs-top-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div.ant-card.ant-card-hoverable > div.ant-card-body > div.ant-table-wrapper > div > div > div > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(7) > button:nth-child(2)');

      await page.waitForSelector('body > div:nth-child(7) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-footer > div > button.ant-btn.ant-btn-primary');
      await page.click('body > div:nth-child(7) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-footer > div > button.ant-btn.ant-btn-primary');
    });
  });

  describe('消息中心页面', () => {
    it('修改成功', async () => {
      //修改操作
      await page.waitForSelector('#root > div > section > section > div > main > div > div > div.ant-tabs-content.ant-tabs-content-animated.ant-tabs-top-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div.ant-card.ant-card-hoverable > div.ant-card-body > div.ant-table-wrapper > div > div > div > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(7) > button:nth-child(1)');
      await page.click('#root > div > section > section > div > main > div > div > div.ant-tabs-content.ant-tabs-content-animated.ant-tabs-top-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div.ant-card.ant-card-hoverable > div.ant-card-body > div.ant-table-wrapper > div > div > div > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(7) > button:nth-child(1)');
      // await page.waitForSelector('body > div:nth-child(9) > div > div.ant-modal-wrap > div > div.ant-modal-content > div > div > div.ant-modal-confirm-btns > button.ant-btn.ant-btn-primary');
      // await page.click('body > div:nth-child(9) > div > div.ant-modal-wrap > div > div.ant-modal-content > div > div > div.ant-modal-confirm-btns > button.ant-btn.ant-btn-primary');
    });
  });
   

  describe('消息中心页面', () => {
    it('删除成功', async () => {
      //删除操作
      await page.waitForSelector('#root > div > section > section > div > main > div > div > div.ant-tabs-content.ant-tabs-content-animated.ant-tabs-top-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div.ant-card.ant-card-hoverable > div.ant-card-body > div.ant-table-wrapper > div > div > div > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(7) > button:nth-child(2)');
      await page.click('#root > div > section > section > div > main > div > div > div.ant-tabs-content.ant-tabs-content-animated.ant-tabs-top-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div.ant-card.ant-card-hoverable > div.ant-card-body > div.ant-table-wrapper > div > div > div > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(7) > button:nth-child(2)');

      await page.waitForSelector('#root > div > section > section > div > main > div > div > div.ant-tabs-content.ant-tabs-content-animated.ant-tabs-top-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div.ant-card.ant-card-hoverable > div.ant-card-body > div.ant-table-wrapper > div > div > div > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(7) > button:nth-child(2)');
      await page.click('#root > div > section > section > div > main > div > div > div.ant-tabs-content.ant-tabs-content-animated.ant-tabs-top-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div.ant-card.ant-card-hoverable > div.ant-card-body > div.ant-table-wrapper > div > div > div > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(7) > button:nth-child(2)');

      await page.waitForSelector('span.ant-calendar-picker');
      await page.evaluate(() => { document.querySelector('input[placeholder=开始日期]').value = '2020-7-10' });
      await page.evaluate(() => { document.querySelector('input[placeholder=结束日期]').value = '2020-7-30' });


      await page.waitForSelector('.ant-tabs-nav');
      await select('我收到的消息', 'div[role=tab]');

    });
  });

}

module.exports = message