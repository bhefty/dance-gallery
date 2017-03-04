import React from 'react'

import Navigation from './components/Navigation'

import building from '../../assets/building_banner.png'
import Wrapper from './Wrapper'
import StyledImage from './StyledImage'

const App = (props) => {
  return (
    <div>
      <Navigation />
      <StyledImage src={building} alt='The Dance Gallery Building' responsive />
      <Wrapper>
        <p>
          Vivamus feugiat velit vitae odio sagittis pellentesque. Aliquam porta orci eu odio venenatis, non aliquam lectus pharetra. Quisque mi lacus, sollicitudin aliquam turpis ac, interdum euismod lorem. Etiam in consequat quam. Suspendisse potenti. Sed et dolor ut urna fermentum eleifend. Sed eget vulputate mauris, eget ultrices lacus. Nulla rutrum pretium commodo. Praesent auctor egestas mauris, quis iaculis nisl pulvinar sollicitudin. Pellentesque facilisis, magna vel interdum lobortis, quam ex laoreet arcu, sit amet vulputate arcu nulla in neque. Pellentesque ut purus ut lectus efficitur tincidunt vel ut urna. Vivamus tristique vehicula felis ut vehicula.
        </p>
        <p>
          Vivamus feugiat velit vitae odio sagittis pellentesque. Aliquam porta orci eu odio venenatis, non aliquam lectus pharetra. Quisque mi lacus, sollicitudin aliquam turpis ac, interdum euismod lorem. Etiam in consequat quam. Suspendisse potenti. Sed et dolor ut urna fermentum eleifend. Sed eget vulputate mauris, eget ultrices lacus. Nulla rutrum pretium commodo. Praesent auctor egestas mauris, quis iaculis nisl pulvinar sollicitudin. Pellentesque facilisis, magna vel interdum lobortis, quam ex laoreet arcu, sit amet vulputate arcu nulla in neque. Pellentesque ut purus ut lectus efficitur tincidunt vel ut urna. Vivamus tristique vehicula felis ut vehicula.
        </p>
        <p>
          Vivamus feugiat velit vitae odio sagittis pellentesque. Aliquam porta orci eu odio venenatis, non aliquam lectus pharetra. Quisque mi lacus, sollicitudin aliquam turpis ac, interdum euismod lorem. Etiam in consequat quam. Suspendisse potenti. Sed et dolor ut urna fermentum eleifend. Sed eget vulputate mauris, eget ultrices lacus. Nulla rutrum pretium commodo. Praesent auctor egestas mauris, quis iaculis nisl pulvinar sollicitudin. Pellentesque facilisis, magna vel interdum lobortis, quam ex laoreet arcu, sit amet vulputate arcu nulla in neque. Pellentesque ut purus ut lectus efficitur tincidunt vel ut urna. Vivamus tristique vehicula felis ut vehicula.
        </p>
      </Wrapper>
    </div>
  )
}

export default App;
