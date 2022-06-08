const multiple = (defNumber) => {
  console.log("Value : ", defNumber);
  if (defNumber > 500 && defNumber <= 1000) multiple(defNumber - 2);
};

multiple(1000);
