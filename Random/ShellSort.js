function shellSort(array) {
    
  const n = array.length;

  let passos = Math.floor(n / 2);

  while (passos > 0) {
    
    for (let i = passos; i < n; i++) {
      const temp = array[i];

      let j = i;

      while (j >= passos && array[j - passos] > temp) {
        array[j] = array[j - passos];
        j -= passos;
      }

      array[j] = temp;
    }

    passos = Math.floor(passos / 2);
  }

  return array;
}
