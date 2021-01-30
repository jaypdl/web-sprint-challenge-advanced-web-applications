import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import Bubbles from './Bubbles';

import mockGetColorData from '../helpers/getColorData'; //importing my data call as a mock

//My mock data to use (copied from actual api)
const mockColorData = [
  { color: "aliceblue", code: { hex: "#f0f8ff" }, id: 1 },
  { color: "limegreen", code: { hex: "#99ddbc" }, id: 2 },
  { color: "aqua", code: { hex: "#00ffff" }, id: 3 },
  { color: "aquamarine", code: { hex: "#7fffd4" }, id: 4 },
  { color: "lilac", code: { hex: "#9a99dd" }, id: 5 },
  { color: "softpink", code: { hex: "#dd99ba" }, id: 6 },
  { color: "bisque", code: { hex: "#dd9a99" }, id: 7 },
  { color: "softyellow", code: { hex: "#dcdd99" }, id: 8 },
  { color: "blanchedalmond", code: { hex: "#ffebcd" }, id: 9 },
  { color: "blue", code: { hex: "#6093ca" }, id: 10 },
  { color: "blueviolet", code: { hex: "#8a2be2" }, id: 11 },
];

jest.mock('../helpers/getColorData.js');

test("Renders BubblePage without errors", async () => {
  //Arrange: set up my test with the my mock data request
  mockGetColorData.mockResolvedValueOnce([])
  render(<BubblePage />);
  
  //Assert: BubblePage rendered correctly, and colors appeared correctly.
  await waitFor( () => {
    expect(screen.getByText(/colors/i)).toBeInTheDocument();
  })
});

test("Fetches data and renders the bubbles on mounting", async () => {
  // Finish this test
  //Arrange: Have Component rendering with mock data call
  mockGetColorData.mockResolvedValueOnce(mockColorData)
  render(<BubblePage />);

  //Assert: Verifying that the color data went through (Causing the names to render)
  const aliceColor = await screen.findByText(/aliceblue/i);
  expect(aliceColor).toBeInTheDocument()
  
  //Assert: Now verifying that the actual bubbles have rendered (added a test-id per bubble rendered)
  const bubbles = await screen.findAllByTestId('bubblesTest')
  expect(bubbles).toHaveLength(11);
});

test("Renders 'bubbles' on mounting", () => {
  //Arrange: Passing in color props to actual Bubbles component
  render(<Bubbles colors={mockColorData} />);

  //Asssert: Making sure the word 'bubbles' actually appears
  expect(screen.getByText(/bubbles/i)).toBeInTheDocument();
  

});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading