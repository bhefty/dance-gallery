import React from 'react'

import Navigation from './components/Navigation'

import Wrapper from './Wrapper'

const App = (props) => {
  return (
    <div>
      <Navigation />
      <Wrapper>
        <h2>The Dance Gallery</h2>
        <p>
          Sed ante ligula, pellentesque id orci vitae, lacinia faucibus metus. Proin dolor ligula, efficitur sed quam sed, imperdiet mattis risus. Aenean convallis dui vel neque suscipit, eu viverra urna sagittis. Maecenas sit amet turpis ultrices neque lacinia elementum. Morbi venenatis dapibus ex, a porta justo posuere ac. Aliquam et nisl vestibulum, efficitur mi et, convallis nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus commodo quam turpis, in tincidunt tellus gravida sed. Proin dolor erat, laoreet sit amet posuere quis, ultricies eget orci. Vivamus nunc elit, vestibulum vitae velit sed, imperdiet scelerisque ante. Vivamus blandit nibh non faucibus eleifend. Maecenas ultrices justo nec erat aliquam hendrerit. Duis eget rutrum dui, sed consectetur lacus. Sed fermentum leo in turpis tristique rutrum. Pellentesque finibus interdum orci ut rutrum. Etiam posuere est libero, sed sollicitudin sapien sollicitudin vitae.
        </p>
      </Wrapper>
    </div>
  )
}

export default App;
