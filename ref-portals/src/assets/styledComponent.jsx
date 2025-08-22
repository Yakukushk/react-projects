import { styled } from "styled-components";

export const Content = styled.div`
  max-width: 60rem;
  margin: 2rem auto;
  padding: 2rem;
  background: radial-gradient(#0b201d, #021619);
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
`;

export const Heading = styled.h1`
  font-family: 'Handjet', monospace;
  text-align: center;
  text-transform: uppercase;
  color: #c1e2dd;
  text-shadow: 0 0 4px rgba(35, 34, 34, 0.4);
  font-size: 3.5rem;
  margin: 0;
  & em {
  color: #00eeff;
  }
}
`;

export const HeaderParagraph = styled.p`
  font-size: 1.2rem;
  margin: 0;
  text-align: center;
  color: #c6f4f2;
`;

export const PlayerContainer = styled.section`
  text-align: center;
`;
export const PlayerHeading = styled.h2`
  color: #54a399;
`;
export const PlayerParagraph = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PlayerInput = styled.input`
  font: inherit;
  border: 1px solid #54a399;
  background-color: #192f2b;
  border-radius: 4px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  padding: 0.25rem;
  color: #d1f0ec;
`;
export const PlayerButton = styled.button`
  cursor: pointer;
  background-color: #54a399;
  border: 1px solid #54a399;
  padding: 0.4rem 1rem;
  color: #061e1a;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  &:hover {
    background-color: #3c8379;
    border-color: #3c8379;
  }
`;

export const Challenges = styled.section`
  max-width: 50rem;
  margin: 3rem auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const Challenge = styled.div`
  width: 22rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  margin: 2rem auto;
  background: linear-gradient(#4df8df, #4df0f8);
  color: #221c18;
  box-shadow: 0 2px 8px rgba(35, 34, 34, 0.6);
  border-radius: 6px;
`;

export const ChallengeButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background: #12352f;
  color: #edfcfa;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    background: #051715;
  }
`;

export const ChallengeHeading = styled.h2`
  font-size: 1.5rem;
  letter-spacing: 0.1em;
  margin: 0;
  text-align: center;
  text-transform: uppercase;
  color: #221c18;
`;

export const ChallengeTime = styled.p`
  border: 1px solid #46cebe;
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  margin: 0.5rem;
  animation: ${({ $active }) => ($active ? "flash 1s infinite" : "none")};
`;

export const ResultsModal = styled.dialog`
  border: none;
  border-radius: 8px;
  padding: 2rem;
  background-color: #d7fcf8;

  &[open] {
    animation: slide-in-from-top 0.35s ease-out;
  }

  &:backdrop {
    background: rgba(0, 0, 0, 0.9);
  }

  & h2 {
    font-family: "Handjet", monospace;
    margin: 0 0 0.25rem 0;
    font-size: 3rem;
    text-transform: uppercase;
  }

  & progress {
    width: 100%;
    height: 1.5rem;
    margin: 0;
    accent-color: #46cebe;
  }

  & p {
    margin: 0.5rem 0;
    font-size: 1.2rem;
  }

  & p strong {
    color: #10655b;
  }

  & form {
    text-align: right;
  }
`;

export const ResultButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background: #12352f;
  color: #edfcfa;
  font-size: 1.2rem;
  cursor: pointer;
`;
