import React from 'react';
import styled from "styled-components";
import image from "../assets/boy.jpg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { cardStyle } from "./ReusableStyles";

export default function Profile() {
    return (
        <Section>
            <div className="image">
                <img src={image} alt="Image" />
            </div>
            <div className="title">
                <h2>Akshay Mishra</h2>
                <h5>
                    <HiOutlineLocationMarker /> Mumbai, India
                </h5>
            </div>
            <div className="info">
                <div className="container">
                    <h5>Days of work</h5>
                    <h3>28</h3>
                </div>
                <div className="container">
                    <h5>Rides</h5>
                    <h3>510</h3>
                </div>
                <div className="container">
                    <h5>Hours</h5>
                    <h3>70</h3>
                </div>
            </div>
        </Section>
    )
}

const Section = styled.section`
    ${cardStyle};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    .image {
        max-height: 10rem;
        overflow: hidden;
        border-radius: 20rem;
        img {
            height: 10rem;
            width: 10rem;
            object-fit: cover;
            border-radius: 20rem;
            transition: 0.5s ease-in-out;
        }
        &:hover {
            img {
                transform: scale(1.1);
            }
        }
    }
    .title {
        text-align: center;
        h2,h5 {
            color: #ffc107;
            font-family: 'Poppins', sans-serif;
            letter-spacing: 0.1rem;
        }
        h5 {
            letter-spacing: 0.2rem;
        }
    }
    .info {
        display: flex;
        gap: 1rem;
        .container {
            text-align: center;
        }
    }
`;
