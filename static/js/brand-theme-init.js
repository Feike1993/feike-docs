(function () {
  var key = 'feike-brand-theme';
  var valid = {
    feike: 1,
    golden: 1,
    cyan: 1,
    lava: 1,
    victory: 1,
    lilac: 1,
    obsidian: 1,
    sky: 1,
  };
  var id = 'feike';
  try {
    var stored = window.localStorage.getItem(key);
    if (stored && valid[stored]) {
      id = stored;
    }
  } catch (e) {
    // Ignore storage failures
  }
  document.documentElement.setAttribute('data-brand-theme', id);
})();
