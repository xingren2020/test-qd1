let CookieQDs = [];

// 判断github action里面是否有京东ck
if (process.env.QD_COOKIE) {
  if (process.env.QD_COOKIE.indexOf('--') > -1) {
    console.log(`您的cookie选择的是用--隔开\n`)
    CookieQDs = process.env.QD_COOKIE.split('--');
  } else (process.env.QD_COOKIE.indexOf('&&') > -1) {
    console.log(`您的cookie选择的是用&&隔开\n`)
    CookieQDs = process.env.QD_COOKIE.split('&&');
  }
}
for (let i = 0; i < CookieQDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieQD' + index] = CookieQDs[i];
}

