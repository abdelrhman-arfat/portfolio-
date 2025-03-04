import { linkSync } from "fs";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const ProjectsCard = ({ title, desc }: { desc: string; title: string }) => {
  return (
    <StyledWrapper>
      <div className="card-container">
        <div className="card">
          <div className="img-content">{title}</div>
          <div className="content">
            <p>{desc}</p>
          </div>
        </div>
        <div></div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card-container {
    color: white;
    width: 300px;
    height: 300px;
    position: relative;
    border-radius: 10px;
  }

  .card-container::before {
    content: "";
    z-index: -1;
    position: absolute;
    inset: 0;
    background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100%);
    transform: translate3d(0, 0, 0) scale(0.8);
    filter: blur(20px);
  }

  .card {
    width: 100%;
    height: 100%;
    border-radius: inherit;
    overflow: hidden;
  }

  .card .img-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100%);
    transition: scale 0.6s, rotate 0.6s, filter 1s;
  }

  .card .img-content svg {
    width: 50px;
    height: 50px;
    fill: #e8e8e8;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .card .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 10px;
    color: #e8e8e8;
    padding: 20px;
    line-height: 1.5;
    border-radius: 5px;
    opacity: 0;
    pointer-events: none;
    transform: translateY(50px);
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .card .content .heading {
    font-size: 32px;
    font-weight: 700;
  }

  .card:hover .content {
    opacity: 1;
    transform: translateY(0);
  }

  .card:hover .img-content {
    scale: 2.5;
    rotate: 30deg;
    filter: blur(7px);
  }

  .card:hover .img-content svg {
    fill: transparent;
  }
`;

export default ProjectsCard;
