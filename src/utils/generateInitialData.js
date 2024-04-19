import tokenGenerator from "./tokenGenerator";
import { format } from "date-fns";

function sweetShop(token, currency, totalTokens) {
  let currentDate = new Date();
  let currentFormatedDate = format(currentDate, "dd MMM yy");

  let testData = [];

  for (let index = 1; index <= Number(totalTokens); index++) {
    let temp = {
      id: index,
      PRODUCT_ID: tokenGenerator(token, index),
      ITEM_NAME1: "name1 " + index,
      ITEM_NAME2: "name2 " + index,
      PRICE: `${currency}. 0`,
      BEST_BEFORE_DATE: currentFormatedDate,
      DISC_NOTE: "0",
    };

    testData.push(temp);
  }

  return testData;
}

function groceryStore(token, currency, totalTokens) {
  let testData = [];

  for (let index = 1; index <= Number(totalTokens); index++) {
    let temp = {
      id: index,
      PRODUCT_ID: tokenGenerator(token, index),
      ITEM_NAME1: "name1 " + index,
      ITEM_NAME2: "name2 " + index,
      PRICE: `${currency}. 0`,
      SALE_PRICE: `${currency}. 0`,
      DISC_NOTE: "0",
    };

    testData.push(temp);
  }

  return testData;
}

function buffetFood(token, totalTokens) {
  let testData = [];

  for (let index = 1; index <= Number(totalTokens); index++) {
    let temp = {
      id: index,
      PRODUCT_ID: tokenGenerator(token, index),
      ITEM_NAME1: "name1 " + index,
      ITEM_NAME2: "name2 " + index,
      CALORIES: `0`,
      ALLERGEN: "0",
      DISC_NOTE: "0",
    };

    testData.push(temp);
  }

  return testData;
}

const generateInitialData = (
  useCase,
  currency,
  tagSize,
  identifier,
  totalTokens
) => {
  const token = "JS" + identifier; // the base token JS will be provided by the company

  let initialData;

  switch (useCase) {
    case "sw":
      initialData = sweetShop(token, currency, totalTokens);
      break;
    case "gr":
      initialData = groceryStore(token, currency, totalTokens);
      break;
    case "bf":
      initialData = buffetFood(token, totalTokens);
      break;
  }

  return initialData;
};

export default generateInitialData;
