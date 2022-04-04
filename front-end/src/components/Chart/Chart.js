import React from "react";
import Title from "../UI/Title";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from "recharts";
import { useTheme } from "@mui/material/styles";

const Chart = (props) => {
  const theme = useTheme();
  return (
    <>
      <Title>{props.title || ""}</Title>
      <ResponsiveContainer>
        <LineChart
          data={props.data}
          margin={{ top: 16, right: 16, bottom: 0, left: 24 }}
        >
          <XAxis
            dataKey="x_axis"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: "middle",
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              {props.xAxisTitle || ""}
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotype"
            dataKey="y_axis"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default Chart;
