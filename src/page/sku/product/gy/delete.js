const deleteSku = () => {
  describe('删除产品', () => {
    it('操作成功', async () => {

      //点击按钮
      await page.waitForSelector('table > tbody > tr:nth-child(1) > td:nth-child(2) > button:nth-child(1)');
      await page.click('table > tbody > tr:nth-child(1) > td:nth-child(2) > button:nth-child(1)');
      
      await page.waitForSelector('div.ant-modal-wrap > div > div.ant-modal-content > div > div > div.ant-modal-confirm-btns > button.ant-btn.ant-btn-primary');
      await page.click('div.ant-modal-wrap > div > div.ant-modal-content > div > div > div.ant-modal-confirm-btns > button.ant-btn.ant-btn-primary');
    });
  });
}

module.exports = deleteSku