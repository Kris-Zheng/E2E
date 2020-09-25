const calendar = async (css, date) => {
  const selector = css;
  const startdate = date;

  await page.evaluate((selector,date) => { document.querySelector(selector).value = date },selector,startdate);
}

module.exports = calendar;