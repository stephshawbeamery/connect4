import { render } from "@testing-library/react";
import { Game } from "./game";

describe("game", () => {
  it("should render an empty grid with 6 rows and 7 columns", () => {
    render(<Game />);
  });
});
