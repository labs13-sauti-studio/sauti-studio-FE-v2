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

const Swatches = () => {  
  return (
    <div className="swatches-container">
      <div class="swatches-row">
        <Swatch color={'#B80000'}/>
        <Swatch color={'#DB3E00'}/>
        <Swatch color={'#FCCB00'}/>
        <Swatch color={'#008B02'}/>
        <Swatch color={'#006B76'}/>
        <Swatch color={'#1273DE'}/>
        <Swatch color={'#004DCF'}/>
        <Swatch color={'#5300EB'}/>
      </div>
      <div class="swatches-row">
        <Swatch color={'#EB9694'}/>
        <Swatch color={'#FAD0C3'}/>
        <Swatch color={'#FEF3BD'}/>
        <Swatch color={'#C1E1C5'}/>
        <Swatch color={'#BEDADC'}/>
        <Swatch color={'#C4DEF6'}/>
        <Swatch color={'#BED3F3'}/>
        <Swatch color={'#D4C4FB'}/>
      </div>
    </div>
  )
}

export default Swatches;
