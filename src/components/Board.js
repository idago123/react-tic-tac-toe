import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback) => {
  const oneDSquares = squares.map((row, i) => {
    return row.map((square, j) => {
     
     return ( 
     <Square 
        key={square.id}
        id={square.id}
        value={square.value}
        onClickCallback= {onClickCallback}
      />
    )})
    
  });
  
  return [...oneDSquares[0], ...oneDSquares[1], ...oneDSquares[2]];
}


const Board = ({ squares, onClickCallback }) => {
  const squareList = generateSquareComponents(squares, onClickCallback);
  return <div className="grid" >
    {squareList}
  </div>
}

Board.propTypes = {
  squares: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired
      })
    )
  ),
  onClickCallback: PropTypes.func.isRequired,
};

export default Board;
