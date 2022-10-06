import { style } from "@vanilla-extract/css";
import { globalStyle } from "@vanilla-extract/css";

globalStyle("html, body", {
  margin: 0,
  padding: "0 20px",
});

export const container = style({
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexFlow: "column",
});
