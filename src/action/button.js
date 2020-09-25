const button = async (number,css) => {
  await page.waitForSelector(css);
  const allButtons = await page.$$(css);
  const current = allButtons[number];
  await current.click();
}

module.exports = button; 

