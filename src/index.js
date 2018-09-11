


module.exports = function getLoveTrianglesCount(preferences = []) {
  preferences.unshift(-1);
  var count = 0;
  var one;
  var two;
  var three;
  for (let i = 1; i < preferences.length; i++) {
    if (preferences[i] == -1) continue;
    one = preferences[i];
    two = preferences[one];
    three = preferences[two];

    if(one == two || two == three) continue;
    if (three == i) {
      count = count + 1;
      preferences[i] = -1;
      preferences[one] = -1;
      preferences[two] = -1;
    }
  }
  return count;
};
