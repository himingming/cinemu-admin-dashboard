//PieDemo
import React from 'react'
import { render } from "react-dom";
import { ResponsivePie } from "@nivo/pie";
function PieDemo() {

const margin = { top: 30, right: 200, bottom: 30, left: 150 };

const styles = {
  root: {
    fontFamily: "consolas, sans-serif",
    textAlign: "center",
    position: "relative",
    width: 800,
    height: 800
  },
  overlay: {
    position: "absolute",
    top: 0,
    right: margin.right,
    bottom: 0,
    left: margin.left,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 96,
    color: "#FFFFFF",
    // background: "#FFFFFF33",
    textAlign: "center",
    // This is important to preserve the chart interactivity
    pointerEvents: "none"
  },
  totalLabel: {
    fontSize: 24
  }
};

const data = [
  {
    id: "가산점",
    label: "가산점",
    value: 25000
  },
  {
    id: "용산점",
    label: "용산점",
    value: 18000
  },
  {
    id: "잠실점",
    label: "잠실점",
    value: 5000
  }
];

const theme = {
  background: "#333333",
  axis: {
    fontSize: "20px",
    tickColor: "#eee",
    ticks: {
      line: {
        stroke: ""
      },
      text: {
        fill: "#333333"
      }
    },
    legend: {
      text: {
        fill: "#333333"
      }
    }
  },
  grid: {
    line: {
      stroke: "#555555"
    }
  }
};

const legends = [
  {
    anchor: "right",
    direction: "column",
    justify: false,
    translateX: 140,
    translateY: 0,
    itemsSpacing: 2,
    itemWidth: 100,
    itemHeight: 20,
    itemDirection: "left-to-right",
    itemOpacity: 0.85,
    itemTextColor: "#ffffff",
    symbolSize: 20,
    effects: [
      {
        on: "hover",
        style: {
          itemOpacity: 1
        }
      }
    ]
  }
];

const PieApp = () => (
    <div style={styles.root}>
      <ResponsivePie
        margin={margin}
        data={data}
        innerRadius={0.8}
        enableRadialLabels={false}
        enableSlicesLabels={false}
        theme={theme}
        legends={legends}
      />
      <div style={styles.overlay}>
        <span>3</span>
        <span style={styles.totalLabel}>총 지점</span>
      </div>
    </div>
  );
    return (
        <div className="ChartContainer">
            <PieApp/>
        </div>
    )
}

export default PieDemo