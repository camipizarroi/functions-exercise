const recurse = (defNumber) => {
  console.log('Value: ', defNumber);
  if (defNumber < 100) recurse(defNumber + 1);
};

recurse(1);