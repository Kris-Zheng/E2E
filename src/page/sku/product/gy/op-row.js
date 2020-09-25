const select = require('../../../../action/select.js');
const allButtons = require('../../../../action/button');
const calendar = require('../../../../action/calendar');
const inputArea = require('../../../../action/input');

const row = () => {
  describe('部门人员', () => {
    it('操作成功', async () => {
      await allButtons(0, 'div[role=combobox]');
      await select('GY', 'li[role=option]');
    });
  });

  describe('虚拟SKU', () => {
    it('操作成功', async () => {
      await inputArea('input[placeholder=虚拟SKU]', 'CN1000310');
      await page.click('div.antd-pro-utils-utils-op-row > div > div > div:nth-child(8)');
      await page.click('div.antd-pro-utils-utils-op-row > div.antd-pro-components-prio-filter-index-operation > div > div:nth-child(3) > span > span');
    });
  });

  describe('产品名称', () => {
    it('操作成功', async () => {
      await inputArea('input[placeholder=产品名称]', '很少很少w');
      await page.click('div.antd-pro-utils-utils-op-row > div > div > div:nth-child(8)');
      await page.click('div.antd-pro-utils-utils-op-row > div.antd-pro-components-prio-filter-index-operation > div > div:nth-child(4) > span > span');
      await inputArea('input[placeholder=产品名称]', '很少');
      await page.click('div.antd-pro-utils-utils-op-row > div > div > div:nth-child(8)');
      await page.click('div.antd-pro-utils-utils-op-row > div.antd-pro-components-prio-filter-index-operation > div > div:nth-child(4) > span > span');
    });
  });

  describe('提交日期', () => {
    it('操作成功', async () => {
      await calendar('input:nth-child(1)[placeholder=提交日期]','2020-7-21');
      await calendar('input:nth-child(3)[placeholder=提交日期]','2020-8-18');
      await page.click('div.antd-pro-utils-utils-op-row > div > div > div:nth-child(8)');
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
      await page.click('div.antd-pro-utils-utils-op-row > div > div > div:nth-child(9)');
    });
  });

  describe('信息查看', () => {
    it('操作成功', async () => {
      await page.waitForSelector('div.ant-card > div > div.ant-table-wrapper > div > div > div > div > div > div.ant-table-body > table > tbody > tr:nth-child(1) > td.antd-pro-pages-s-k-u-review-index-th.ant-table-row-cell-ellipsis > a');
      await page.click('div.ant-card > div > div.ant-table-wrapper > div > div > div > div > div > div.ant-table-body > table > tbody > tr:nth-child(1) > td.antd-pro-pages-s-k-u-review-index-th.ant-table-row-cell-ellipsis > a');

      await page.click('div.ant-card > div > div.ant-table-wrapper > div > div > div > div > div > div.ant-table-body > table > tbody > tr:nth-child(1) > td:nth-child(7) > button');

      await page.waitForSelector('div.ant-modal-wrap.ant-modal-centered > div > div.ant-modal-content > div.ant-modal-body > div > div > div > div > div > div > table > tbody > tr > td.ant-table-row-cell-ellipsis.ant-table-row-cell-break-word > a')
      await page.click('div.ant-modal-wrap.ant-modal-centered > div > div.ant-modal-content > div.ant-modal-body > div > div > div > div > div > div > table > tbody > tr > td.ant-table-row-cell-ellipsis.ant-table-row-cell-break-word > a');
      await page.click('div.ant-modal-wrap.ant-modal-centered > div > div.ant-modal-content > button');

      await page.click('div.ant-card > div > div.ant-table-wrapper > div > div > div > div > div > div.ant-table-body > table > tbody > tr:nth-child(1) > td:nth-child(12) > a');
      await page.click('div.ant-card > div > div.ant-table-wrapper > div > div > div > div > div > div.ant-table-body > table > tbody > tr:nth-child(1) > td:nth-child(12) > a');
    });
  });
}

module.exports = row