const allButtons = require('../../../action/button');
const inputArea = require('../../../action/input');

const deleteItem = () => {
  describe('删除产品', () => {
    it('操作成功', async () => {
      await page.waitForSelector('div.ant-card-body > p:nth-child(6) > button:nth-child(2)');
      await allButtons(0, 'div.ant-card-body > p:nth-child(6) > button:nth-child(2)');
      // const sku = await page.$eval('div.ant-card-body > p > span:nth-child(1)', el => el.innerText);
      await inputArea('#inherit_t_sku', 'A1220287');
      await allButtons(3, 'form > div> div > div > span > button');

      const list = await page.$$('table > tbody > tr > td > div > div > div > ul > li > div > input');

      if (list.length > 1) {
        await inputArea('table > tbody > tr:nth-child(1) > td:nth-child(3) > div > div > div > ul > li > div > input', '黑色');
        await inputArea('table > tbody > tr:nth-child(2) > td:nth-child(3) > div > div > div > ul > li > div > input', '白色');
        await inputArea('table > tbody > tr:nth-child(3) > td:nth-child(3) > div > div > div > ul > li > div > input', '绿色');
      }
      else{
        await inputArea('table > tbody > tr:nth-child(1) > td:nth-child(3) > div > div > div > ul > li > div > input', '黑色');
      }


      await allButtons(3, 'div.ant-modal-footer > div > button.ant-btn.ant-btn-primary');

      await allButtons(0, 'div.ant-modal-confirm-btns > button.ant-btn.ant-btn-primary');
    });
  });
}

module.exports = deleteItem