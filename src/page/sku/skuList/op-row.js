const inputArea = require('../../../action/input');
const select = require('../../../action/select');
const calendar = require('../../../action/calendar');
const allButtons = require('../../../action/button');

const row = () => {

  describe('SKU查询', () => {
    it('操作成功', async () => {
      await inputArea('input[placeholder=SKU]', 'A1220374');
    });
  });

  describe('部门人员', () => {
    it('操作成功', async () => {
      const options = await page.$$('div[role=combobox]');
      await options[0].click();
      await page.waitForSelector('ul[role=listbox]');
      await select('GY', 'li[role=option]');

    });
  });

  describe('关键字查询', () => {
    it('操作成功', async () => {
      await inputArea('input[placeholder=关键字]', '水壶');

      const a = ['模糊', '精确'];

      const trigger = await page.$('span.ant-input-group-addon');

      for (let i = 0; i < a.length; i++) {
        await trigger.click();
        await page.waitForSelector('ul[role=menu]');
        await select(a[i], 'li[role=menuitem]');
      }
    });
  });

  describe('子SKU查询', () => {
    it('操作成功', async () => {
    });
  });

  describe('虚拟子SKU查询', () => {
    it('操作成功', async () => {
    });
  });

  describe('入库时间', () => {
    it('操作成功', async () => {
      // await page.evaluate(()=>{document.querySelector('input:nth-child(1)[placeholder=入库时间]').value='2020-7-25'});
      await calendar('input:nth-child(1)[placeholder=入库时间]','2020-7-21');
      await calendar('input:nth-child(3)[placeholder=入库时间]','2020-8-18');
    });
  });

  describe('更新时间', () => {
    it('操作成功', async () => {
      await calendar('input:nth-child(1)[placeholder=更新时间]','2020-7-25');
      await calendar('input:nth-child(3)[placeholder=更新时间]','2020-8-18');
    });
  });

  describe('重置', () => {
    it('操作成功', async () => {
      await allButtons(0,'button.ant-btn-danger');
    });
  });

  describe('1688货源信息', () => {
    it('操作成功', async () => {
      await allButtons(0,'div.ant-card-body > p:nth-child(2) > a');
      await allButtons(0,'button.ant-modal-close');
    });
  });

  describe('产品详情', () => {
    it('操作成功', async () => {
      await allButtons(0,'div.ant-card-body > p:nth-child(2) > button');
      await allButtons(1,'button.ant-modal-close');
    });
  });

}

module.exports = row