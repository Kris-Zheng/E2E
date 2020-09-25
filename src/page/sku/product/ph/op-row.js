const select = require('../../../../action/select.js');
const allButtons = require('../../../../action/button');
const calendar = require('../../../../action/calendar');
const inputArea = require('../../../../action/input');

const row = () => {
  // describe('部门人员', () => {
  //   it('操作成功', async () => {
  //     await allButtons(0, 'div[role=combobox]');
  //     await select('GY', 'li[role=option]');
  //   });
  // });

  describe('人员', () => {
    it('操作成功', async () => {
      await allButtons(0, 'div[role=combobox]');
      await select('GY-113', 'li[role=option]');
    });
  });

  describe('虚拟SKU', () => {
    it('操作成功', async () => {
      await inputArea('input[placeholder=虚拟SKU]', 'SQ1000315');
    });
  });

  describe('真实SKU', () => {
    it('操作成功', async () => {
      await inputArea('input[placeholder=真实SKU]', 'SQ1000315');
    });
  });

  describe('产品名称', () => {
    it('操作成功', async () => {
      await inputArea('input[placeholder=产品名称]', '@1');
    });
  });

  describe('提交日期', () => {
    it('操作成功', async () => {
      await calendar('input:nth-child(1)[placeholder=提交日期]', '2020-7-21');
      await calendar('input:nth-child(3)[placeholder=提交日期]', '2020-8-18');
    });
  });

  describe('审核状态', () => {
    it('操作成功', async () => {
      await allButtons(1, 'div[role=combobox]');
      await select('未审核', 'li[role=option]');
      await allButtons(1, 'div[role=combobox]');
      await select('审核通过', 'li[role=option]');
      await allButtons(1, 'div[role=combobox]');
      await select('审核失败', 'li[role=option]');
      await allButtons(1, 'div[role=combobox]');
      await select('审核异常', 'li[role=option]');
      await allButtons(1, 'div[role=combobox]');
      await select('部分审核失败', 'li[role=option]');
      await allButtons(1, 'div[role=combobox]');
      await select('部分未审核', 'li[role=option]');
    });
  });

  describe('是否出单', () => {
    it('操作成功', async () => {
      await allButtons(2, 'div[role=combobox]');
      await select('未出单', 'li[role=option]');
      await allButtons(2, 'div[role=combobox]');
      await select('出单', 'li[role=option]');
    });
  });

  describe('重置所有', () => {
    it('操作成功', async () => {
      await allButtons(0,'button.ant-btn-danger');
    });
  });
}

module.exports = row