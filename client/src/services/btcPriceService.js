import axios from "axios";

export const url = "http://localhost:8082/api/bitcoin";

export const getBtcPrices = async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const postBtcPrice = async (value) => {
  try {
    await axios.post(`${url}/add`, value);
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteData = () => {
  try {
    axios.get(`${url}/deleteAll`);
  } catch (error) {
    throw new Error(error);
  }
};

export const getData = async () => {
  try {
    await axios.get(`${url}/populate`);
  } catch (error) {
    throw new Error(error);
  }
};
