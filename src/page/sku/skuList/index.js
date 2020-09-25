const opRow = require('./op-row'); 
const update = require('./update');
const deleteItem = require('./delete');

const index = (url) => {
  const branch = url + '> ul > li:nth-child(2)';
 
  describe('SKU列表页面', () => {
    it('跳转成功', async () => {
      await page.waitForSelector(branch);
      await page.click(branch);
    });
  });

  opRow();
  update();
  deleteItem();
}

module.exports = index