import React from 'react';
import styled from "styled-components";
import { HiArrowNarrowRight } from "react-icons/hi";
import mahesh from "../assets/mahesh.jpg";
import { cardStyle } from './ReusableStyles';

export default function Transfers() {
    const transactions = [
        {
            image: mahesh,
            name: "From Sumit",
            time: "Today, 10:20",
            amount: "+Rs.3500"
        },
        {
            image: mahesh,
            name: "To Akshay Mishra",
            time: "Today, 01:35",
            amount: "+Rs.1500"
        },
        {
            image: mahesh,
            name: "From Amit",
            time: "Today, 06:10",
            amount: "+Rs.5400"
        },
    ];
    return (
        <Section>
            <div className="title">
                <h2>your Transfers</h2>
            </div>
            <div className="transactions">
                {
                    transactions.map((transaction, index)=> {
                        return (
                            <div className="transaction" key={index}>
                                <div className="transaction_title">
                                    <div className="transaction_title_image">
                                        <img src={transaction.image} alt="transaction Image" />
                                    </div>
                                    <div className="transaction_title_details">
                                        <h3>{transaction.name}</h3>
                                        <h5>{transaction.time}</h5>
                                    </div>
                                </div>
                                <div className="transaction_amount">
                                    <span>{transaction.amount}</span>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            <a href="#" className='view'>
                View all <HiArrowNarrowRight />
            </a>
        </Section>
    )
}

const Section = styled.section`
    ${cardStyle};
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .title {
        h2 {
            color: #ffc107;
            font-family: 'Poppins', sans-serif;
            letter-spacing: 0.1rem;
        }
    }
    .transactions {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-top: 1rem;
        .transaction {
            display: flex;
            justify-content: space-between;
            align-items: center;
            &_title {
                display: flex;
                gap: 1rem;
                &_image {
                    img {
                        height: 2.5rem;
                        border-radius: 1.25rem;
                    }
                }
            }
            &_amount {
                background-color: #d7e41e1d;
                padding: 0.2rem 0.5rem;
                width: 5rem;
                border-radius: 1rem;
                text-align: center;
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
    .view {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        text-decoration: none;
        color: #ffc107;
        font-weight: bold;
        margin-top: 1rem;
        gap: 0.5rem;
        svg {
            transition: 0.3s ease-in-out;
            font-size: 1.4rem;
        }
        &:hover {
            svg {
                transform: translateX(0.5rem);
            }
        }
    }
    @media screen and (min-width: 280px) and (max-width: 1080px) {
        .transactions {
            .transaction {
                flex-direction: column;
                align-items: center;
                gap: 1rem;
            }
        }
    }
`;