import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineMarkSeries,
  Hint,
} from "react-vis";

import styles from "./Timeline.module.css";
import { formatCurrency } from "../utils";

const Timeline = ({ data }) => {
  const [value, setValue] = useState({});
  return data?.length ? (
    <div data-testid="graph" className={styles.container}>
      <XYPlot xType="ordinal" height={500} width={1000}>
        <VerticalGridLines />
        <HorizontalGridLines />

        <YAxis
          tickFormat={(v) => `${v.toString().slice(0, 2)}K`}
          title="Price"
        />
        <XAxis bottom={250} tickTotal={11} title="Date" tickLabelAngle={45} />
        <LineMarkSeries
          opacity={1}
          strokeStyle="solid"
          data={data}
          style={{ stroke: "violet", strokeWidth: 3 }}
          onValueMouseOver={(datapoint) => {
            setValue(datapoint);
          }}
        />

        <Hint value={value}>
          <div className={styles.hintContainer}>
            <h2 className={styles.title}>Average prices for {value.x}</h2>
            <p className={styles.text}>{formatCurrency(value.y)}</p>
          </div>
        </Hint>
      </XYPlot>
    </div>
  ) : (
    <div data-testid="noShow"></div>
  );
};

Timeline.propTypes = {
  data: PropTypes.arrayOf(Object).isRequired,
};

export default Timeline;
