const allButtons = require('../../../action/button');
const inputArea = require('../../../action/input');

const update = () => {
  describe('更新产品', () => {
    it('操作成功', async () => {
      await allButtons(0, 'button.ant-btn-primary');
      await inputArea('#title', '大大');

      // 新增
      await allButtons(0, 'div.ant-form-item-control-wrapper > div > span > button:nth-child(1)');
      await inputArea('#supply_url', 'fewfwef');
      await inputArea('#department', 'nmsl');
      await allButtons(1, 'div.ant-modal-footer > div > button.ant-btn.ant-btn-primary');

      // 查看已有  
      await allButtons(0, 'div.ant-form-item-control-wrapper > div > span > button:nth-child(2)');

      //更新
      await allButtons(1, 'table > tbody > tr > td > button');
      await inputArea('#supply_url', '4334');
      await inputArea('#department', 'gy');
      await inputArea('#daily_supply', '5');
      await allButtons(2, 'div.ant-modal-footer > div > button.ant-btn.ant-btn-primary');

      // 删除
      await allButtons(0, 'table > tbody > tr> td > button:nth-child(1)');
      await allButtons(0, 'div.ant-modal-confirm-btns > button.ant-btn.ant-btn-primary');

      // 新增
      await allButtons(0, 'div.ant-modal-body > div > button');
      await inputArea('#supply_url', '13344');
      await inputArea('#department', 'gy');
      await allButtons(2, 'div.ant-modal-footer > div > button.ant-btn.ant-btn-primary');

      // 关闭对话框
      await allButtons(4, 'button.ant-modal-close');

      await inputArea('#supply_image', 'https://cbu01.alicdn.com/img/ibank/2018/551/046/9284640155_760003016.310x310.jpg');

      // 产品属性
      const list = await page.$$('div.ant-modal-content > div.ant-modal-body > form > div:nth-child(5) > div > div > span > div');

      if (list.length > 1) {
        await inputArea('#attrs0', '1');
        await inputArea('#attrs1', '2');
        await inputArea('#attrs2', '3');
      }
      
      await inputArea('#publisher_product_remark', 'ahc');
      await inputArea('#remark', 'grbn');

      await allButtons(0, 'div.ant-modal-footer > div > button.ant-btn.ant-btn-primary');
      await allButtons(0, 'div.ant-modal-confirm-btns > button.ant-btn.ant-btn-primary');
    });
  });
}

module.exports = update