import axios from "axios";

import { v4 as uuidv4 } from "uuid";

const API_URL = "http://localhost:8000";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export class SweetShopb {
  static saveData = async (data) => {
    // Generate a new unique ID
    const newId = uuidv4();

    const newData = {
      _id: newId,
      PRODUCT_ID: data.PRODUCT_ID,
      NAME: data.ITEM_NAME1 + data.ITEM_NAME2,
      PRICE: data.PRICE,
      BEST_BEFORE_DATE: data.BEST_BEFORE_DATE,
      DISC_NOTE: data.DISC_NOTE,
    };

    try {
      const response = await api.post("/api/sweetshop", newData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  static saveAllData = async (dataArray) => {
    let newDataArray = [];

    dataArray.forEach((data) => {
      const newData = {
        _id: uuidv4(),
        PRODUCT_ID: data.PRODUCT_ID,
        NAME: data.ITEM_NAME1 + data.ITEM_NAME2,
        PRICE: data.PRICE,
        BEST_BEFORE_DATE: data.BEST_BEFORE_DATE,
        DISC_NOTE: data.DISC_NOTE,
      };
      newDataArray.push(newData);
    });

    try {
      const response = await api.post("/api/sweetshop/bulk", newDataArray);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  static getAll = async () => {
    try {
      const response = await api.get("/api/sweetshop/");
      return response.data;
    } catch (error) {
      throw error;
    }
  };
}

export class GroceryStoreb {
  static saveData = async (data) => {
    // Generate a new unique ID
    const newId = uuidv4();

    const newData = {
      _id: newId,
      PRODUCT_ID: data.PRODUCT_ID,
      NAME: data.ITEM_NAME1 + data.ITEM_NAME2,
      PRICE: data.PRICE,
      SALE_PRICE: data.SALE_PRICE,
      DISC_NOTE: data.DISC_NOTE,
    };

    try {
      const response = await api.post("/api/grocery", newData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  static saveAllData = async (dataArray) => {
    let newDataArray = [];

    dataArray.forEach((data) => {
      const newData = {
        _id: uuidv4(),
        PRODUCT_ID: data.PRODUCT_ID,
        NAME: data.ITEM_NAME1 + data.ITEM_NAME2,
        PRICE: data.PRICE,
        SALE_PRICE: data.SALE_PRICE,
        DISC_NOTE: data.DISC_NOTE,
      };
      newDataArray.push(newData);
    });

    try {
      const response = await api.post("/api/grocery/bulk", newDataArray);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  static getAll = async () => {
    try {
      const response = await api.get("/api/grocery/");
      return response.data;
    } catch (error) {
      throw error;
    }
  };
}

export class Buffet {
  static saveData = async (token, data) => {
    // Generate a new unique ID
    const newId = uuidv4();

    const newData = {
      token,
      data: {
        _id: newId,
        PRODUCT_ID: data.PRODUCT_ID,
        NAME: data.ITEM_NAME1 + data.ITEM_NAME2,
        CALORIES: data.CALORIES,
        ALLERGEN: data.ALLERGEN,
        NOTE: data.DISC_NOTE,
      },
    };

    try {
      const response = await api.post("/api/buffet", newData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  static saveAllData = async (token, dataArray) => {
    let newDataArray = [];

    // console.log(token, dataArray);

    dataArray.forEach((data) => {
      const newData = {
        _id: uuidv4(),
        PRODUCT_ID: data.PRODUCT_ID,
        NAME: data.ITEM_NAME1 + data.ITEM_NAME2,
        CALORIES: data.CALORIES,
        ALLERGEN: data.ALLERGEN,
        NOTE: data.DISC_NOTE,
      };
      newDataArray.push(newData);
    });

    const newData = { token, newDataArray };

    try {
      const response = await api.post("/api/buffet/bulk", newData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  static getAll = async () => {
    try {
      const response = await api.get("/api/buffet/");
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  static getAllByToken = async (token) => {
    try {
      const response = await api.get(`/api/buffet/${token}`);
      return response.data;
    } catch (error) {
      throw error;
      // return null;
    }
  };
}

export class Patient {
  static saveData = async (data) => {
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

  static saveAllData = async (dataArray) => {
    let newDataArray = [];

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
      newDataArray.push(newData);
    });

    try {
      const response = await api.post("/api/patient/bulk", newDataArray);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  static getAll = async () => {
    try {
      const response = await api.get("/api/patient/");
      return response.data;
    } catch (error) {
      throw error;
    }
  };
}
