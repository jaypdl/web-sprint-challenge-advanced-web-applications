import React from "react";
import { render, screen, wait, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import Bubbles from './Bubbles';

import mockGetColorData from '../helpers/getColorData';

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
  mockGetColorData.mockResolvedValueOnce([])
  render(<BubblePage />);
  
  await waitFor( () => {
    expect(screen.getByText(/colors/i)).toBeInTheDocument();
  })
});

test("Fetches data and renders the bubbles on mounting", async () => {
  // Finish this test
  mockGetColorData.mockResolvedValueOnce(mockColorData)
  render(<BubblePage />);

  const aliceColor = await screen.findByText(/aliceblue/i);
  expect(aliceColor).toBeInTheDocument()
  
  const bubbles = await screen.findAllByTestId('bubblesTest')
  expect(bubbles).toHaveLength(11);

});

test("Renders 'bubbles' on mounting", () => {
  render(<Bubbles colors={mockColorData} />);
  expect(screen.getByText(/bubbles/i)).toBeInTheDocument();
  

});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading