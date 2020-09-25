const select = require('../../../action/select');
const allButtons = require('../../../action/button');
const calendar = require('../../../action/calendar');
const inputArea = require('../../../action/input');

const opRow = () => {

  describe('部门', () => {
    it('操作成功', async () => {
      await allButtons(0, 'div[role=combobox]');
      await select('GY', 'li[role=option]');
    });
  });

  describe('人员', () => {
    it('操作成功', async () => {
      await allButtons(1, 'div[role=combobox]');
      await select('GY-113', 'li[role=option]');
    });
  });

  describe('审核状态', () => {
    it('操作成功', async () => {
      await allButtons(2, 'div[role=combobox]');
      await select('未完全审核', 'li[role=option]');
      await allButtons(2, 'div[role=combobox]');
      await select('审核通过', 'li[role=option]');
      await allButtons(2, 'div[role=combobox]');
      await select('审核失败', 'li[role=option]');
    });
  });

  describe('提交日期', () => {
    it('操作成功', async () => {
      await calendar('input:nth-child(1)[placeholder=提交日期]', '2020-7-21');
      await calendar('input:nth-child(3)[placeholder=提交日期]', '2020-8-18');
    });
  });

  describe('搜索内容', () => {
    it('操作成功', async () => {
      await inputArea('input[placeholder=搜索内容]', 'BS1000273');
    });
  });
}

module.exports = opRow