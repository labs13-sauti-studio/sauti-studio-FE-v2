import React from 'react';

import Swatch from './Swatch';

const colors = [
  '#B80000', 
  '#DB3E00', 
  '#FCCB00', 
  '#008B02', 
  '#006B76', 
  '#1273DE', 
  '#004DCF', 
  '#5300EB', 
  '#EB9694', 
  '#FAD0C3', 
  '#FEF3BD', 
  '#C1E1C5', 
  '#BEDADC', 
  '#C4DEF6', 
  '#BED3F3', 
  '#D4C4FB'
]

const Swatches = (props) => {  
  console.log(props);
  return (
    <div className="swatches-container">
      <div class="swatches-row">
        <Swatch changeColor={props.changeColor} updateSelectedColor={props.updateSelectedColor} color={'#B80000'}/>
        <Swatch changeColor={props.changeColor} updateSelectedColor={props.updateSelectedColor} color={'#DB3E00'}/>
        <Swatch changeColor={props.changeColor} updateSelectedColor={props.updateSelectedColor} color={'#FCCB00'}/>
        <Swatch changeColor={props.changeColor} updateSelectedColor={props.updateSelectedColor} color={'#008B02'}/>
        <Swatch changeColor={props.changeColor} updateSelectedColor={props.updateSelectedColor} color={'#006B76'}/>
        <Swatch changeColor={props.changeColor} updateSelectedColor={props.updateSelectedColor} color={'#1273DE'}/>
        <Swatch changeColor={props.changeColor} updateSelectedColor={props.updateSelectedColor} color={'#004DCF'}/>
        <Swatch changeColor={props.changeColor} updateSelectedColor={props.updateSelectedColor} color={'#5300EB'}/>
      </div>
      <div class="swatches-row">
        <Swatch changeColor={props.changeColor} updateSelectedColor={props.updateSelectedColor} color={'#EB9694'}/>
        <Swatch changeColor={props.changeColor} updateSelectedColor={props.updateSelectedColor} color={'#FAD0C3'}/>
        <Swatch changeColor={props.changeColor} updateSelectedColor={props.updateSelectedColor} color={'#FEF3BD'}/>
        <Swatch changeColor={props.changeColor} updateSelectedColor={props.updateSelectedColor} color={'#C1E1C5'}/>
        <Swatch changeColor={props.changeColor} updateSelectedColor={props.updateSelectedColor} color={'#BEDADC'}/>
        <Swatch changeColor={props.changeColor} updateSelectedColor={props.updateSelectedColor} color={'#C4DEF6'}/>
        <Swatch changeColor={props.changeColor} updateSelectedColor={props.updateSelectedColor} color={'#BED3F3'}/>
        <Swatch changeColor={props.changeColor} updateSelectedColor={props.updateSelectedColor} color={'#D4C4FB'}/>
      </div>
    </div>
  )
}

export default Swatches;
