import tokenGenerator from "./tokenGenerator";
import { format } from "date-fns";

const generateInitialData = (
  useCase,
  currency,
  tagSize,
  identifier,
  totalTokens
) => {
  const token = "JS" + identifier;

  let currentDate = new Date();
  let currentFormatedDate = format(currentDate, "dd MMM yy");

  let testData = [];

  for (let index = 1; index <= Number(totalTokens); index++) {
    let temp = {
      id: index,
      PRODUCT_ID: tokenGenerator(token, index),
      ITEM_NAME: "Product " + index,
      PRICE: `${currency}. 0`,
      BEST_BEFORE_DATE: currentFormatedDate,
      DISC_NOTE: "0",
    };

    testData.push(temp);
  }

  return testData;
};

export default generateInitialData;
