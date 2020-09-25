const select = require('../../../../action/select.js');

const submit = () => {
  describe('产品审核提交', () => {
    it('操作成功', async () => {

      await page.waitForSelector('#root > div > section > section > div > main > div > div > div.antd-pro-utils-utils-op-row > div:nth-child(2) > button');
      await page.click('#root > div > section > section > div > main > div > div > div.antd-pro-utils-utils-op-row > div:nth-child(2) > button');

      await page.waitForSelector('div.ant-modal-wrap.ant-modal-centered > div > div.ant-modal-content > div.ant-modal-footer > div > button.ant-btn.ant-btn-primary');
      await page.click('div.ant-modal-wrap.ant-modal-centered > div > div.ant-modal-content > div.ant-modal-footer > div > button.ant-btn.ant-btn-primary');

      await page.waitForSelector('#title');
      await page.type('#title', 'wdnmd');

      // 新增
      await page.click('form > div:nth-child(2) > div.ant-col.ant-col-13.ant-col-offset-1.ant-form-item-control-wrapper > div > span > button');
      await page.waitForSelector('#supply_url');
      await page.type('#supply_url', 'ddddddddd');
      const button2 = await page.$$('button.ant-btn-primary');
      await button2[5].click();

      //查看已有
      await page.waitForSelector('div.ant-modal-wrap.ant-modal-centered > div > div.ant-modal-content > div.ant-modal-body > form > div:nth-child(2) > div.ant-col.ant-col-13.ant-col-offset-1.ant-form-item-control-wrapper > div > span > button:nth-child(3)');
      await page.click('div > div.ant-modal-wrap.ant-modal-centered > div > div.ant-modal-content > div.ant-modal-body > form > div:nth-child(2) > div.ant-col.ant-col-13.ant-col-offset-1.ant-form-item-control-wrapper > div > span > button:nth-child(3)');

      // 更新供应商列表
      await page.waitForSelector('div.ant-modal-wrap.ant-modal-centered > div > div.ant-modal-content > div.ant-modal-body > div.ant-table-wrapper > div > div > div > div > div > table > tbody > tr > td:nth-child(4) > button:nth-child(2)');
      await page.click('div > div.ant-modal-wrap.ant-modal-centered > div > div.ant-modal-content > div.ant-modal-body > div.ant-table-wrapper > div > div > div > div > div > table > tbody > tr > td:nth-child(4) > button:nth-child(2)');
      const supplier = await page.$$('#supply_url');
      await supplier[1].type('ffffffffffffffff');
      const button3 = await page.$$('div.ant-modal-footer > div > button.ant-btn.ant-btn-primary');
      await button3[2].click();

      // 删除供应商列表
      await page.waitForSelector('div.ant-modal-wrap.ant-modal-centered > div > div.ant-modal-content > div.ant-modal-body > div.ant-table-wrapper > div > div > div > div > div > table > tbody > tr > td:nth-child(4) > button:nth-child(1)');
      await page.click('div.ant-modal-wrap.ant-modal-centered > div > div.ant-modal-content > div.ant-modal-body > div.ant-table-wrapper > div > div > div > div > div > table > tbody > tr > td:nth-child(4) > button:nth-child(1)');

      await page.waitForSelector('div.ant-modal-wrap > div > div.ant-modal-content > div > div > div.ant-modal-confirm-btns > button.ant-btn.ant-btn-primary');
      await page.click('div.ant-modal-wrap > div > div.ant-modal-content > div > div > div.ant-modal-confirm-btns > button.ant-btn.ant-btn-primary');

      // 新增供应商列表
      await page.waitForSelector('div.ant-modal-wrap.ant-modal-centered > div > div.ant-modal-content > div.ant-modal-body > div:nth-child(1) > button')
      await page.click('div.ant-modal-wrap.ant-modal-centered > div > div.ant-modal-content > div.ant-modal-body > div:nth-child(1) > button')
      const newsupplier = await page.$$('#supply_url');
      await newsupplier[1].type('stella');
      const button5 = await page.$$('div.ant-modal-footer > div > button.ant-btn.ant-btn-primary');
      await button5[2].click();
      
      //关闭
      const close = await page.$$('button[aria-label=Close]');
      await close[4].click();


      //产品链接
      await page.waitForSelector('#product_url');
      await page.type('#product_url', 'wdnmd');
      await page.type('#shop_name', 'nmsl');
      await page.click('#prefix > div > div');
      await page.waitForSelector('ul[role=listbox]')
      await select('shopbase', 'li[role=option]');

      // 产品属性
      await page.waitForSelector('div.ant-modal-content > div.ant-modal-body > form > div:nth-child(5) > div.ant-col.ant-col-13.ant-col-offset-1.ant-form-item-control-wrapper > div > span > button');
      await page.click('div.ant-modal-content > div.ant-modal-body > form > div:nth-child(5) > div.ant-col.ant-col-13.ant-col-offset-1.ant-form-item-control-wrapper > div > span > button');

      // 导入excel
      await page.click('.ant-modal-title > div > button');
      const excel = await page.waitForSelector('input[type=file]');
      await excel.uploadFile('C:\\Users\\user\\Documents\\workspace\\E2E umi\\mock\\product_attr_template.xlsx');
      await page.click('div.ant-modal-footer > div > button.ant-btn.ant-btn-primary');
   
      // 添加
      const button4 = await page.$('form > div > div > button');
      await button4.click();
      const attribute = await page.$('input[placeholder=请输入产品属性]');
      await attribute.type('123');
       
      const price = await page.$$('input[role=spinbutton');
      await price[2].type('50');
      await price[3].type('100');

      const button6 = await page.$$('button.ant-btn-primary');
      await button6[9].click();

      //敏感产品属性
      await page.waitForSelector('#sensitive_product_attr');
      await page.click('#sensitive_product_attr');
      await page.waitForSelector('ul[role=listbox]')
      await select('刀具', 'li[role=option]');
      await select('打火机', 'li[role=option]');

      await page.click('div.ant-modal-footer > div > button.ant-btn.ant-btn-primary')
   
      // 确定
      const button7 = await page.$$('button.ant-btn-primary');
      await button7[11].click();
    });
  });
}

module.exports = submit