// Builds email links in the browser so address-harvesting bots don't find them in the page source.
document.querySelectorAll('a.em').forEach(function (a) {
  var addr = a.dataset.u + '@' + a.dataset.d;
  a.href = 'mail' + 'to:' + addr;
  if (a.dataset.show) a.textContent = addr;
});
