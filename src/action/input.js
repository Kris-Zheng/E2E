const input = async (css, text) => {
  const selector = css;
  const input = await page.$$(selector);

  if (input.length > 0) {
    const index = input.length - 1;
    await input[index].type(text);
  }
  else {
    await input[0].type(text);
  }
}

module.exports = input; 
