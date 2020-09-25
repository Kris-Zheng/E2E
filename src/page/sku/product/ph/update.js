const allButtons = require('../../../../action/button');
const inputArea = require('../../../../action/input');
const select = require('../../../../action/select');

const update = () => {
  describe('更新产品', () => {
    it('操作成功', async () => {

      // 首次审核异常
      await allButtons(0, 'button.ant-btn-link');
      await allButtons(0, '#check_stat');
      const select1 = await page.$$('li[role=option]');
      await select1[70].click();
      const isDisabled = await page.evaluate(() => document.querySelector('input#sku').disabled);
      expect(isDisabled).toBeTruthy();
      await allButtons(0, 'div.ant-modal-footer > div > button.ant-btn.ant-btn-primary');

      // 首次审核通过
      await allButtons(0, '#check_stat');
      const select2 = await page.$$('li[role=option]');
      await select2[68].click()
      await allButtons(0, 'form > div > div > div > span > button');
      await allButtons(0, '#sub_code > div');
      await select('电视', 'li[role=option]')
      await allButtons(1, 'div.ant-modal-footer > div > button.ant-btn.ant-btn-primary')
      await inputArea('#t_title', '牛牛牛牛');
      await inputArea('#remark', '真的牛');
      await inputArea('table > tbody > tr > td > div > div > div > ul > li > div > input', 's');
      await inputArea('table > tbody > tr > td > span > input', 'b');
      await allButtons(0, 'div.ant-modal-footer > div > button.ant-btn.ant-btn-primary');
      await allButtons(0, 'div.ant-modal-confirm-btns > button.ant-btn.ant-btn-primary');

      // 首次审核失败
      await allButtons(0, 'button.ant-btn-link');
      await allButtons(0, '#check_stat');
      const select3 = await page.$$('li[role=option]');
      await select3[69].click()
      const isDisabled2 = await page.evaluate(() => document.querySelector('input#sku').disabled);
      expect(isDisabled2).toBeTruthy();
      await inputArea('#check_info', '真的牛');
      await allButtons(0, 'div.ant-modal-footer > div > button.ant-btn.ant-btn-primary');
      await allButtons(0, 'div.ant-modal-confirm-btns > button.ant-btn.ant-btn-primary');

      // 再次审核成功
      await allButtons(0, 'button.ant-btn-link');
      await allButtons(0, '#check_stat');
      const select4 = await page.$$('li[role=option]');
      select4[68].click();
      await allButtons(0, 'form > div > div > div > span > button');
      await allButtons(0, '#sub_code > div');
      await select('空调', 'li[role=option]')
      await allButtons(1, 'div.ant-modal-footer > div > button.ant-btn.ant-btn-primary');
      await allButtons(0, 'div.ant-modal-footer > div > button.ant-btn.ant-btn-primary');
      await allButtons(0, 'div.ant-modal-confirm-btns > button.ant-btn.ant-btn-primary');

      // 部分审核失败
      await allButtons(0, 'button.ant-btn-link');
      await allButtons(0, '#check_stat');
      const select5 = await page.$$('li[role=option]');
      select5[68].click();
      await inputArea('#remark', '真的牛');
      await page.evaluate(() => document.querySelector('table > tbody > tr > td > div > div > div > ul > li > div > input').value='');
      await inputArea('table > tbody > tr > td > div > div > div > ul > li > div > input', 'error');
      await allButtons(0, 'div.ant-modal-footer > div > button.ant-btn.ant-btn-primary');
      await allButtons(0, 'div.ant-modal-confirm-btns > button.ant-btn.ant-btn-primary');
     
      // 再次审核失败
      await allButtons(0, 'button.ant-btn-link');
      await allButtons(0, '#check_stat');
      const select6 = await page.$$('li[role=option]');
      select6[69].click();
      await allButtons(0, 'div.ant-modal-footer > div > button.ant-btn.ant-btn-primary');
      await allButtons(0, 'div.ant-modal-confirm-btns > button.ant-btn.ant-btn-primary');
    });
  });
}

module.exports = update