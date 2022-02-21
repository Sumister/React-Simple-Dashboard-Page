import React from 'react';
import styled from 'styled-components';
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import { cardStyle } from './ReusableStyles';

const data = [
    { data: 4500 },
    {
        data: 5000
    },
    {
        data: 4700
    },
    {
        data: 4400
    },
    {
        data: 4800
    },
    {
        data: 5300
    },
    {
        data: 5800
    },
    {
        data: 6000
    },
    {
        data: 6300
    },
    {
        data: 6800
    },
    {
        data: 7100
    },
    {
        data: 7300
    },
    {
        data: 7500
    },
    {
        data: 7800
    },
    {
        data: 8000
    },
    {
        data: 7100
    },
    {
        data: 6500
    },
    {
        data: 6800
    },
    {
        data: 7500
    },
    {
        data: 7800
    },
    {
        data: 8100
    },
    {
        data: 8500
    },
    {
        data: 8100
    },
    {
        data: 7900
    },
    {
        data: 8300
    },
    {
        data: 8500
    },
    {
        data: 8800
    },

]

export default function Earnings() {
    return (
        <Section>
            <div className="top">
                <div className="info">
                    <h4>This month earnings</h4>
                    <h1>Rs.14800</h1>
                    <div className="growth">
                        <span>+3.15%</span>
                    </div>
                </div>
            </div>
            <div className="chart">
                <ResponsiveContainer height="100%" width="100%">
                    <AreaChart height={400} width={500} data={data} margin={{top: 0, left: 0, right: 0, bottom: 0}}>
                        <Tooltip cursor={false} />
                        <Area
                        animationBegin={800}
                        animationDuration={2000}
                        type="monotone"
                        dataKey="data"
                        stroke='#ffc107'
                        fill='#8068233e'
                        strokeWidth={4}
                         />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </Section>
    )
}

const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 20rem;
    ${cardStyle};
    padding: 2rem 0 0 0;
    .top {
        .info {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.3rem;
            h1 {
                font-size: 2rem;
            }
            .growth {
                background-color: #d7e41a1d;
                padding: 0.5rem;
                border-radius: 1rem;
                transition: 0.3s ease-in-out;
                &:hover {
                    background-color: #ffc107;
                    span {
                        color: black;
                    }
                }
                span {
                    color: #ffc107;
                }
            }

        }
    }
    .chart {
        height: 70%;
        .recharts-default-tooltip {
            background-color: black !important;
            border-color: black !important;
        }
    }
`;
