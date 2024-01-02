import styled from "styled-components";

const NumberSelector = ({selectedNumber, setSelectedNumber, error,  setError}) => {

    const numOfBox = [1, 2, 3, 4, 5, 6];

    const numberSelectorHandler = (value) => {
        setSelectedNumber(value);
        setError("")
    }
    


    return (
        <NumberSelectorContainer>
            <p className="error">{error}</p>
            <div className="flex">
            {
                numOfBox.map((value, index) => {
                    return (
                        <Box 
                        isselected = {value === selectedNumber}
                            onClick={()=> numberSelectorHandler(value)}
                            key={index}
                        >{value}
                        </Box>
                    )
                })
            }
            </div>
            <p>Select Number</p>

        </NumberSelectorContainer>
    )
}

export default NumberSelector

const NumberSelectorContainer = styled.div`
    .flex{
        display: flex;
        gap: 24px;
    }
    p{
        font-size: 24px;
        font-weight: 600;
        text-align: end;
    }

    .error{
        font-size: 20px;
        color: red;
    }

`

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    /* cursor: pointer; */
    background-color: ${ (props)=> (props.isselected ? 'black' : 'white')};
    color: ${(props)=> (props.isselected ? 'white' : 'black')};
`