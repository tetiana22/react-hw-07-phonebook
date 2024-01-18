import { keyframes } from 'styled-components';
import styled from 'styled-components';

export const ListOfContact = styled.ul`
  display: flex;
  flex-direction: column;
  alight-item: center;
  font-size: 20px;
  width: 400px;
  padding: 12px;
  margin: 0 auto;
`;

export const ContactItem = styled.li`
margin-bottom: 20px;
padding: 8px 12px;
border: 2px solid #92717d;
background-color: #fff;
border-radius: 4px;
list-style: none;
display: flex;
  align-items: center;
  justify-content: space-between;
    button {
        cursor: pointer;
    border: 2px solid black;
    color: #000;
    font-size: 18px;
    background-color: #d3dde3;
        }
    }
`;
export const Text = styled.p`
  display: inline-block;
  min-width: 300px;
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top-color: #333;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin-bottom: 20px;
  margin-left: 70px;

  animation: ${spin} 1s ease-in-out infinite;
`;
