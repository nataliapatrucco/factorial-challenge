import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { formatedPriceMock } from "../test/__mocks__/Mocks";
import UserInput from "./UserInput";

describe("Input Component", () => {
  it("renders userInput component", () => {
    const { getByTestId } = render(<UserInput getPrices={() => {}} />);
    const input = getByTestId("input");
    expect(input).toBeTruthy();
  });
});
