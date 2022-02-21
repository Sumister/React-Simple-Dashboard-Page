import React, { useEffect } from 'react';
import styled from "styled-components";
import Navbar from "./Navbar";
import FAQ from "./FAQ";
import Analytics from "./Analytics";
import Earnings from './Earnings';
import Transfers from './Transfers';
import Profile from "./Profile";
import scrollreveal from "scrollreveal";

export default function Dashboard() {
    useEffect(() => {
        const sr = scrollreveal({
          origin: 'bottom',
          distance: '80px',
          duration: 2000,
          reset: false
        });
        sr.reveal(`
         nav,
         .row_one,
         .row_two
        `,{
          opacity: 0,
          interval: 100
        })
      })

    return (
        <Section>
            <Navbar />
                <div className="grid">
                    <div className="row_one">
                        <Analytics />
                        <FAQ />
                    </div>
                    <div className="row_two">
                        <Earnings />
                        <Transfers />
                        <Profile />
                    </div>
                </div>
        </Section>
    )
}

const Section = styled.section`
    margin-left: 18vw;
    padding: 2rem;
    height: 100%;
    .grid {
        display: flex;
        flex-direction: column;
        height: 100%;
        gap: 1rem;
        margin-top: 2rem;
        .row_one {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            height: 50%;
            gap: 1rem;
        }
        .row_two {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            height: 50%;
            gap: 1rem;
        }
    }
    @media screen and (min-width: 280px) and (max-width: 1080px) {
        margin-left: 0;
        .grid {
            .row_one,.row_two {
                grid-template-columns: 1fr;
            }
        }
    }
`;