let CookieQDs = [

];

CookieQDs = process.env.QD_COOKIE;

for (let i = 0; i < CookieQDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieQD' + index] = CookieQDs[i];
}


