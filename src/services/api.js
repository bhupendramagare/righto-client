import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const API_URL = "http://localhost:8000";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const saveData = async (data) => {
  // Generate a new unique ID
  const newId = uuidv4();

  const newData = {
    _id: newId,
    PRODUCT_ID: data.PRODUCT_ID,
    NAME: data.ITEM_NAME1 + data.ITEM_NAME2,
    AGE: data.AGE,
    GENDER: data.GENDER,
    CONSULTING_DR: data.CONSULTING_DR,
    ADMITTED_DATE: data.ADMITTED_DATE,
    PROCEDURE_NAME: data.PROCEDURE_NAME,
    MODE_OF_PAYMENT: data.MODE_OF_PAYMENT,
  };

  try {
    const response = await api.post("/api/patient", newData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const saveAllData = async (dataArray) => {
  let newPatientsDataArray = [];

  dataArray.forEach((data) => {
    const newData = {
      _id: uuidv4(),
      PRODUCT_ID: data.PRODUCT_ID,
      NAME: data.ITEM_NAME1 + data.ITEM_NAME2,
      AGE: data.AGE,
      GENDER: data.GENDER,
      CONSULTING_DR: data.CONSULTING_DR,
      ADMITTED_DATE: data.ADMITTED_DATE,
      PROCEDURE_NAME: data.PROCEDURE_NAME,
      MODE_OF_PAYMENT: data.MODE_OF_PAYMENT,
    };
    newPatientsDataArray.push(newData);
  });

  try {
    const response = await api.post("/api/patient/bulk", newPatientsDataArray);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAll = async () => {
  try {
    const response = await api.get("/api/patient/");
    return response.data;
  } catch (error) {
    throw error;
  }
};
