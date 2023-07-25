import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import TodoList from './Components/TodoList'
import Gallery from './Components/Gallery'
import ConditionalRendering from './Components/ConditionalRendering'
import RenderingLists from './Components/RenderingLists'
import EventHandlers from './Components/EventHandlers/EventHandlers'
import Counter from './Components/UseState/Counter'
import MultipleStateVariables from './Components/UseState/MultipleStateVariables'
import Todos from './Components/UseState/Todos'
import TodoApp from './Components/UseState/TodoApp'

//  function Profile() {
//   return (
//     <img
//       src="https://i.imgur.com/MK3eW3Am.jpg"
//       alt="Katherine Johnson"
//     />
//   )
// }


// function App() {
//   // const [count, setCount] = useState(1)

//   return (
//     // <>
//     //   <div>
//     //     <a href="https://vitejs.dev" target="_blank">
//     //       <img src={viteLogo} className="logo" alt="Vite logo" />
//     //     </a>
//     //     <a href="https://react.dev" target="_blank">
//     //       <img src={reactLogo} className="logo react" alt="React logo" />
//     //     </a>
//     //   </div>
//     //   <h1>Vite + React</h1>
//     //   <div className="card">
//     //     <button onClick={() => setCount((count) => count + 1)}>
//     //       count is {count}
//     //     </button>
//     //     <p>
//     //       Edit <code>src/App.jsx</code> and save to test HMR
//     //     </p>
//     //   </div>
//     //   <p className="read-the-docs">
//     //     Click on the Vite and React logos to learn more
//     //   </p>
//     // </>
//     // <h1>Hi Darling</h1>
//     <Profile/>
//   )
// }

// function Profile() {
//   return (
//     <img
//       src="https://i.imgur.com/MK3eW3As.jpg"
//       alt="Katherine Johnson"
//     />
//   );
// }

export default function Gallery1() {
  return (
    <section>
      {/* <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile /> */}
      {/* <TodoList/> */}
      {/* <Gallery/> */}
      {/* <ConditionalRendering/> */}
      {/* <RenderingLists/> */}
      {/* <EventHandlers/> */}
      {/* <Counter/> */}
      {/* <MultipleStateVariables/> */}
      <Todos/>
      <TodoApp/>
    </section>
  );
}


// export default App






