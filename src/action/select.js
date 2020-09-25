const select = async (selectOption, tag) => {
  const css = tag;
  
  await page.waitForSelector(css);
  const allOption = await page.$$(css);

  const allOptionText = await page.$$eval(css, eles => eles.map(ele => ele.textContent));

  console.log("文本内容",allOptionText);

  const index = allOptionText.findIndex(t => {
    t = t ? t : '';
    return t === selectOption;
  })

  if (index < 0) {
    throw new Error('找不到元素');
  }

  const option = allOption[index];

  await option.click();

}

module.exports = select; 

