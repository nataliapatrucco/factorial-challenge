import "@testing-library/jest-dom";
import { getByTestId, render, screen } from "@testing-library/react";
import { formatedPriceMock } from "../test/__mocks__/Mocks";
import Timeline from "./Timeline";

describe("Timeline Component", () => {
  it("renders graph", () => {
    const { getByTestId } = render(<Timeline data={formatedPriceMock} />);
    const timeline = getByTestId("graph");
    expect(timeline).toBeTruthy();
  });

  it("doesn't renders graph", () => {
    const { getByTestId } = render(<Timeline data={[]} />);
    const timeline = getByTestId("noShow");
    expect(timeline).toBeTruthy();
  });
});
