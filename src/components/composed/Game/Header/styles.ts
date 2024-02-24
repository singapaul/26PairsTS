import styled from "styled-components";

export const BoardNav = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #292975;
  overflow: hidden;
`;

export const BoardActionsWrapper = styled.div`
  display: flex;
  background-color: white;
  align-items: center;
  border-width: 2px;
  border-color: grey;
  border-radius: 0.25rem;
  color: black;
  padding: 0.5rem;
  margin: 0.5rem;

  @media (min-width: 500px) {
    margin: 1rem;
  }
`;

export const IconWrapper = styled.p`
  font-size: 1.5rem;
  color: #eee;
  margin: 0;

  @media (min-width: 500px) {
    font-size: 2rem;
    display: flex;
    align-content: flex-start;
    align-items: flex-start;
  }
`;

export const ImageWrapper = styled.div`
  padding: 5px;
  cursor: pointer;
`;

export const ImageObj = styled.img`
  max-width: 3.5rem;
  max-height: 3.5rem;
`;

export const StyledButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  padding: 0.5rem;
  border-radius: 9999px;
`;

export const FlexGroup = styled.div`
  display: flex;
`;

export const StatsStyled = styled.div`
  width: 100%;
  display: block;
  justify-content: space-around;
  text-align: left;
  color: black;
  opacity: 0.6;
  padding: 0;
  margin: 6px;
  font-size: 0.8rem;
  font-weight: 900;
  white-space: nowrap;

  @media (min-width: 1000px) {
    font-size: 1.5rem;
    margin: 8px;
  }
`;