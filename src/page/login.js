const login = () => {
  beforeAll(async () => { // 这段代码将会执行在所有代码之前
    await page.goto(URL, { waitUntil: 'domcontentloaded' });
  });
  describe('登入页面', () => {
    it('登入成功', async () => {
      // const title = await page.title();
      // expect(title).toBe('数据中控');

      await page.waitForSelector('#userName');
      await page.type('input#userName', account.ph.username);
      await page.type('input#password', account.ph.password);

      await page.waitForSelector('button[type=submit]');
      await page.click('button[type=submit]');

      await page.waitForNavigation([300]);
    });
  });
}

module.exports = login

