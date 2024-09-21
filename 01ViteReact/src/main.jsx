import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyTest() {
  return (
    <h3>Hello DebugCodez!</h3>
  )
}

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   content: "click here to visit google!",
// };

const anotherElement = (
  <a href="https://google.com">click here...</a>
)


const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click to visit google',
  anotherElement
)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    reactElement
  // </StrictMode>,
)
