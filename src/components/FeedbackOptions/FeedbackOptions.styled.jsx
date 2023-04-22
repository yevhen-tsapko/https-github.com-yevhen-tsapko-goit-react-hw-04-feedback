import styled from 'styled-components';
export const OptionButton = styled.button`
  margin-left: 5px;
  font-size: 16px;
  border-radius: 5px;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.25);
  :focus,
  :hover {
    background-color: #b5e5ee;
  }
  :active {
    background: blue;
  }
`;
