const opRow = require('./op-row.js');
const phopRow = require('./ph-op-row');
const create = require('./create.js');

const index = (url) => {

  switch (url) {
    case '#root > div > section > aside > div > ul > li:nth-child(3)':
      describe('组合SKU', () => {
        it('跳转成功', async () => {
          await page.waitForSelector(`${url} > ul`);
          await page.click(`${url} > ul > li:nth-child(2)`);
        });
      });
      opRow();
      create();

      break;

    case '#root > div > section > aside > div > ul > li:nth-child(2)':
      describe('组合SKU', () => {
        it('跳转成功', async () => {
          await page.waitForSelector(`${url} > ul`);
          await page.click(`${url} > ul > li:nth-child(3)`);
        });
      });
      phopRow();

      break;
  }
}

module.exports = index