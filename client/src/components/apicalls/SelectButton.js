import styled from 'styled-components'

const SelectButton = ({ children, buttonSelected, onClick }) => {

  return (
    <Select onClick={onClick} buttonSelected={buttonSelected}>
      {children}
    </Select>
  );
};

export default SelectButton;

const Select = styled.div`
  border: 1px solid gold;
  border-radius: 5px;
  padding: 10px 20px 10px 20px;
  cursor: pointer;
  background-color: ${({ buttonSelected }) => (buttonSelected ? "" : "gold")};
  color: ${({ buttonSelected }) => (buttonSelected ? "white" : "")};
  font-weight: ${({ buttonSelected }) => (buttonSelected ? "700" : "500")};
  width: 120px;
  text-align: center;
  &:hover{
    background-color: black;
    color: gold;
  }
`;