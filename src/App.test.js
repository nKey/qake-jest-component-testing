import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Astromatch/i);
  expect(linkElement).toBeInTheDocument();
  const linkElementImg = screen.getByTestId("imgLogoTinder");
  console.log({ linkElementImg });
  expect(linkElementImg).toBeInTheDocument();
  const attributeSRC = linkElementImg.getAttribute("src");
  expect(attributeSRC).toEqual(
    "https://br.tinderpressroom.com/image/flame-gradient-RGB_tn1100-category.png"
  );
  const attributeAlt = linkElementImg.getAttribute("alt");
  expect(attributeAlt).toEqual("Logo tinder");
});
