import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { btcAPIMock } from "../test/__mocks__/Mocks";
import axios from "axios";

import { getBtcPrices, postBtcPrice } from "./btcPriceService";

jest.mock("axios");

describe("getBtcPrices", () => {
  it("fetches successfully data from an API", async () => {
    // axios.get.mockImplementationOnce(() => Promise.resolve(btcAPIMock));
    // await expect(getBtcPrices()).resolves.toBe(btcAPIMock);
  });

  it("fetches erroneously data from an API", async () => {
    const errorMessage = "Network Error";

    // axios.get.mockImplementationOnce(() =>
    //   Promise.reject(new Error(errorMessage))
    // );
    // await expect(getBtcPrices()).rejects.toThrow(errorMessage);
  });
});

describe("Post a new price", () => {
  it("Post a new price to the API", async () => {});
});
