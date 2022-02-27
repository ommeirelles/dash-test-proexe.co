import React, { useCallback } from 'react'
import ReactDOM from 'react-dom'
import { Dash } from './templates/dashboard'
import './index.scss'

// const ThemToggleButton = () => {
//   const dark = "dark";
//   return (
//     <Button
//       id="theme-toggle"
//       onClick={useCallback(() => {
//         if (document.documentElement.classList.contains(dark)) {
//           document.documentElement.classList.remove(dark);
//         } else {
//           document.documentElement.classList.add(dark);
//         }
//       }, [])}
//     >
//       <AtSymbolIcon
//         className={`
//           h-5
//           inline
//           pr-1
//           aspect-auto
//       `}
//       />
//       toggle theme
//     </Button>
//   );
// };

ReactDOM.render(
  <React.StrictMode>
    <Dash />
  </React.StrictMode>,
  document.getElementById('root')
)
