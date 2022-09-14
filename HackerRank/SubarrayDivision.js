function birthday(s, d, m) {
  let result = 0;
  let i = 0;
  let sum = 0;
  let shouldRestart = false;
  const restart = () => {
    i = 0;
    s.shift();
    sum = 0;
    shouldRestart = false;
  };

  while (i < m) {
    if (s.length < m) {
      return result;
    }

    sum += s[i];

    if (i == m - 1 && sum == d) {
      shouldRestart = true;
      result++;
    }

    if ((i == m - 1 || sum > d) && !shouldRestart) {
      shouldRestart = true;
    }

    i++;

    if (shouldRestart) {
      restart();
    }
  }
}

birthday([1, 2, 1, 3, 2], 3, 2);
