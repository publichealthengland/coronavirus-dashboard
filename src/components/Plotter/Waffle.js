// @flow

import React from "react";

import { BasePlotter } from "./BasePlot";
import { hexToRgb } from "common/utils";
import { scaleColours } from "common/utils";
import { zip } from "d3-array";

import type { ComponentType } from "react";


const scaleLevels = [
    0,
    10 / 800,
    50 / 800,
    100 / 800,
    200 / 800,
    400 / 800,
    1
];


const asCssRgb = ( hex ) => {

    const { r, g, b } = hexToRgb(hex);

    return `rgb(${r},${g},${b})`

};  // asCssRgb


export const Waffle: ComponentType<*> = ({ data, layout, config, ...props }) => {

    const tickvals = [];

    return <BasePlotter
        data={ data }
        margin={{
            l: 22,
            r: 0,
            t: 20
        }}
        style={{
            display: "inline-block"
        }}
        layout={ {
            hovermode: "x+y",
            height: 350,
            legend: {
                orientation: 'v',
                font: {
                    family: `"GDS Transport", Arial, sans-serif`,
                    size: 16,
                },
                xanchor: 'left',
                yachor: 'bottom',
                y: -.3,
                x: 0
            },
            showlegend: true,
            plot_bgcolor: "rgba(231,231,231,0)",
            paper_bgcolor: "rgba(255,255,255,0)",
            ...layout
        } }
        xaxis={{
            range: [.5, 10.5],
            fixedrange: true,
            type: 'linear',
            tickvals: tickvals.reverse(),
            tickformat: null,
            showgrid: false,
            tickslen: 0,
            ticks: null
        }}
        yaxis={{
            range: [.5, 10.5],
            tickvals: tickvals,
            ticktext: tickvals.map(val => `${val}`).reverse(),
            showgrid: false,
            scaleratio: 1,
            scaleanchor: "x",
        }}
        config={{
            modeBarButtonsToRemove: [
                "autoScale2d",
                "zoomIn2d",
                "zoomOut2d",
                "toggleSpikelines",
                "hoverClosestCartesian",
                "hoverCompareCartesian",
                "zoom2d",
                "pan2d",
                "select2d",
                "lasso2d",
            ]
        }}
        { ...props }
    />

};  // ScatterPlot


export default Waffle;