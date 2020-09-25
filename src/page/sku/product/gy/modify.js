const select = require('../../../../action/select.js');

const modifySku = () => {
  describe('修改产品', () => {
    it('操作成功', async () => {
      // 检查是否禁用
      // await page.waitFor(5000);
      // const statusText = await page.$$eval('tr', eles => eles.map(ele => ele.innerText));
      // const index = statusText.findIndex(t => {
      //   t = t ? t : '';
      //   return t.includes('审核失败');
      // })

      // console.log('index', index);

      // await page.waitForSelector('tr:nth-child(8) > td:nth-child(2) > button:nth-child(2)');
      // const beDisabled = await page.evaluate(() => document.querySelector('tr:nth-child(8) > td:nth-child(2) > button:nth-child(2)').disabled);

      // expect(beDisabled).toBeTruthy();

      // 修改标题
      await page.waitForSelector('table > tbody > tr:nth-child(1) > td:nth-child(2) > button:nth-child(2)')
      await page.click('table > tbody > tr:nth-child(1) > td:nth-child(2) > button:nth-child(2)');

      await page.waitForSelector('input[placeholder=产品标题]');
      await page.type('input[placeholder=产品标题]', 'efqfqe');

      // 供应商列表
      await page.click('div.ant-modal-wrap.ant-modal-centered > div > div.ant-modal-content > div.ant-modal-body > form > div:nth-child(2) > div.ant-col.ant-col-13.ant-col-offset-1.ant-form-item-control-wrapper > div > span > button:nth-child(2)');
      await page.type('#supply_url', 'afafda');
      
      const button1 = await page.$$('button.ant-btn-primary');
      button1[5].click();
      
      // 修改链接
      await page.waitForSelector('#product_url');
      await page.type('#product_url','adfaf');

      // 店铺
      const shop = await page.$('#prefix');
      await shop.click();
      await page.waitForSelector('ul[role=listbox]');
      await select('shopbase', 'li[role=option]');
      const shopName = await page.$('#shop_name');
      shopName.type('asfas');

      //产品属性
      await page.click('div.ant-modal-wrap.ant-modal-centered > div > div.ant-modal-content > div.ant-modal-body > form > div:nth-child(5) > div.ant-col.ant-col-13.ant-col-offset-1.ant-form-item-control-wrapper > div > span > button');

      const price = await page.$$('input[role=spinbutton]');
      for (i = 0; i < price.length - 1; i++) {
        await price[i].type('5');
      }

      const button2 = await page.$$('button.ant-btn-link');
      await button2[96].click();


      // 删除新增
      const button3 = await page.$$('button.ant-btn-link');
      await button3[95].click();
     
      // 确定
      const button4 = await page.$$('button.ant-btn-primary');
      await button4[9].click();

      //敏感产品属性
      await page.waitForSelector('#sensitive_product_attr');
      await page.click('#sensitive_product_attr');
      await page.waitForSelector('ul[role=listbox]')
      await select('带电', 'li[role=option]');
      await select('纯电', 'li[role=option]');

      // 修完完成
      await page.waitForSelector('div.ant-modal-wrap.ant-modal-centered > div > div.ant-modal-content > div.ant-modal-footer > div > button.ant-btn.ant-btn-primary');
      await page.click('div.ant-modal-wrap.ant-modal-centered > div > div.ant-modal-content > div.ant-modal-footer > div > button.ant-btn.ant-btn-primary');

      const button5 = await page.$$('button.ant-btn-primary');
      await button5[11].click();
    });
  });
}

module.exports = modifySku