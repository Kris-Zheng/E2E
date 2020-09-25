const logistics = () => {
  describe('物流查询页面', () => {
    it('查询成功', async () => {
      // const title = await page.title();
      // expect(title).toBe('数据中控');
      //物流查询
      await page.waitForSelector('#root > div > section > aside > div > ul > li:nth-child(4) > div > span > span:nth-child(2)');
      await page.click('#root > div > section > aside > div > ul > li:nth-child(4) > div > span > span:nth-child(2)'); 
      await page.click('#root > div > section > aside > div > ul > li:nth-child(4) > ul> li > a');

      await page.waitForSelector('.ant-input');
      await page.type('.ant-input','CUS200706BPTT1000573');
      await page.click('.ant-input-clear-icon');
      await page.type('.ant-input','LY306202874CN');
      await page.click('button[type=button]');
  
      await page.click('#root > div > section > section > div > main > div > div > div.antd-pro-pages-track-query-index-flex > div > div.ant-col.ant-form-item-control-wrapper > div > span > span > span > a');
      await page.type('#list','CUS200706BPTT1000573');
      await page.keyboard.press('Enter');
      await page.type('#list','LY306206690CN');
      
      await page.waitForSelector('body > div:nth-child(6) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-footer > div > button.ant-btn.ant-btn-primary');
      await page.click('body > div:nth-child(6) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-footer > div > button.ant-btn.ant-btn-primary');


      await page.waitForSelector('td.ant-table-row-expand-icon-cell');

      await page.click('td.ant-table-row-expand-icon-cell');
    });
  });

}

module.exports = logistics