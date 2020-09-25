const allButtons = require('../../../action/button.js');

const create = () => {
  describe('创建组合SKU', () => {
    it('跳转成功', async () => {
      await page.waitForSelector('div.antd-pro-utils-utils-page-title > div > button.ant-btn.ant-btn-default.ant-btn-lg');
      await page.click('div.antd-pro-utils-utils-page-title > div > button.ant-btn.ant-btn-default.ant-btn-lg');
    });
  });

  describe('添加子SKU', () => {
    it('操作成功', async () => {
      await page.waitForSelector('input.ant-input');
      await page.type('input.ant-input', 'HB1000317-12');
      await page.type('input[role=spinbutton]', '0');

      await allButtons(1, 'button.ant-btn-primary');
      await allButtons(1, 'button.ant-btn-primary');
      // 检查是否有提示
      await page.waitForSelector('.ant-message-notice', { timeout: 10000 });
      const haveMessage1 = await page.evaluate(() => document.querySelectorAll('.ant-message-notice').length > 0);
      expect(haveMessage1).toBeTruthy();
      await allButtons(0, 'button.ant-btn-link');

      await page.waitForSelector('#count');
      await page.type('#count', '0');
      await page.click('div.ant-modal-wrap.ant-modal-centered > div > div.ant-modal-content > div.ant-modal-footer > div > button.ant-btn.ant-btn-primary')
      await allButtons(1, 'button.ant-btn-link');

      // 查找
      await allButtons(2, 'button.ant-btn-primary');
      // 检查状态
      const status = await page.$$eval('tr', eles => eles.map(ele => ele.textContent))
      expect(['审核失败']).toEqual(
        expect.not.arrayContaining(status),
      );

      // 输入
      await page.waitForSelector('#search_form_content');
      await page.type('#search_form_content', 'HB1000317-12');

      const span = await page.$$('span.ant-input-group-addon');
      await span[1].click();

      await page.waitForSelector('input[type=checkbox]');
      const checkbox = await page.$('input[type=checkbox]');
      await checkbox.click();

      await page.waitForSelector('input[role=spinbutton]');
      const spin = await page.$$('input[role=spinbutton]');
      await spin[1].type('0');
      
      const button = await page.$$('button.ant-btn-primary');
      button[6].click();
      
      await allButtons(3, 'button.ant-btn-primary');

      // 检查是否有提示
      await page.waitForSelector('.ant-message-notice', { timeout: 10000 });
      const haveMessage = await page.evaluate(() => document.querySelectorAll('.ant-message-notice').length > 0);
      expect(haveMessage).toBeTruthy();

      // 再次查找
      await allButtons(2, 'button.ant-btn-primary');

      // 产品名称
      await page.waitForSelector('body > div:nth-child(9) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-body > form > div:nth-child(1) > div.ant-col.ant-form-item-control-wrapper.ant-col-xs-24.ant-col-sm-16 > div > span > button.ant-btn.antd-pro-pages-s-k-u-complex-sku-component-create-complex-sku-components-search-form-index-unChecked.ant-btn-link');
      await page.click('body > div:nth-child(9) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-body > form > div:nth-child(1) > div.ant-col.ant-form-item-control-wrapper.ant-col-xs-24.ant-col-sm-16 > div > span > button.ant-btn.antd-pro-pages-s-k-u-complex-sku-component-create-complex-sku-components-search-form-index-unChecked.ant-btn-link');

      await page.waitForSelector('#search_form_content');
      await page.evaluate(() => { document.querySelector('#search_form_content').value = '' });


      await page.type('#search_form_content', '哈哈哈哈哈');
      await span[1].click();

      await page.waitForSelector('tbody');

      await allButtons(0, 'input[type=checkbox]');

      const button1 = await page.$$('button.ant-btn-primary');
      button1[6].click();
      
      await allButtons(3, 'button.ant-btn-primary');
      await allButtons(7, 'button.ant-btn-primary');
    });
  });
}

module.exports = create