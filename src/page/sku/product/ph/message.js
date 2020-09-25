const allButtons = require('../../../../action/button');

const message = () => {
  describe('信息查看', () => {
    it('操作成功', async () => {
      // 产品链接
      await allButtons(0, 'table > tbody > tr > td > a');
      
      // 货源信息
      await allButtons(0, 'table > tbody > tr > td:nth-child(7) > button');
      await allButtons(0, '.ant-modal-close-x');

      // sku信息
      await allButtons(1, 'table > tbody > tr > td > a');
      await allButtons(1, '.ant-modal-close-x');
    });
  });
}

module.exports = message