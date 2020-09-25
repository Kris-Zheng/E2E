

const dashboard = () => {
  describe('Dashboard', () => {
    it('操作成功', async () => {

      await page.waitForSelector('#root > div > section > section > header > div > span > span');
      await page.click('#root > div > section > section > header > div > span > span');
      await page.click('#root > div > section > section > header > div > span > span');

      await page.waitForSelector('#root > div > section > section > div > main > div > div > div:nth-child(2) > form > div > div:nth-child(1) > div > div > div:nth-child(2) > span > span > input:nth-child(1)');

      // await calendar('input','2020-7-10');
      await page.evaluate(()=>{document.querySelector('input[placeholder=开始日期]').value='2020-7-10'});
      await page.evaluate(()=>{document.querySelector('input[placeholder=结束日期]').value='2020-7-30'});
      
      await page.click('#root > div > section > section > div > main > div > div > div.ant-pro-grid-content > div:nth-child(2) > div:nth-child(1) > div > div.ant-card-head > div > div.ant-card-extra > div > div > label:nth-child(2)');
      
      await page.click('#root > div > section > section > div > main > div > div > div.ant-pro-grid-content > div:nth-child(2) > div:nth-child(2) > div > div.ant-card-head > div > div.ant-card-extra > div > div > label:nth-child(2)');

      await page.click('#root > div > section > section > div > main > div > div > div.ant-pro-grid-content > div:nth-child(3) > div:nth-child(1) > div > div.ant-card-head > div > div.ant-card-extra > div > div > div > label:nth-child(2)');
      

    });
  });
}

module.exports = dashboard