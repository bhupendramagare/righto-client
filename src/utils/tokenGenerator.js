const tokenGenerator = (prefix, index) => {
  let num = index < 10 ? "00" + index : index < 100 ? "0" + index : "" + index;
  let token = prefix + num;
  return token;
};

export default tokenGenerator;
