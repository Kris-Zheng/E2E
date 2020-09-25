const operationRow = require('./gy/op-row');
const phoperationRow = require('./ph/op-row');
const submit = require('./gy/submit');
const modify = require('./gy/modify');
const deleted = require('./gy/delete');
const message = require('./ph/message');
const update = require('./ph/update');

const index = (url) => {

  const branch = url + '> ul > li:nth-child(1)';

  switch (url) {
    case '#root > div > section > aside > div > ul > li:nth-child(3)':
      describe('产品审核页面', () => {
        it('跳转成功', async () => {
          await page.waitForSelector(branch);
          await page.click(branch);
        });
      });
      operationRow();
      submit();
      modify();
      deleted();
      break;

    case '#root > div > section > aside > div > ul > li:nth-child(2)':
      describe('产品审核页面', () => {
        it('跳转成功', async () => {
          await page.waitForSelector(branch);
          await page.click(branch);
        });
      });
      phoperationRow();
      message();
      update();
      break;
  }
}

module.exports = index