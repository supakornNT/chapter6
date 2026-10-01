import "./App.css";
import FoodContainer from "./components/foodContainer";

// function ChangeColor() {
//   const [color, setColor] = useState("red");
//   return (
//     <section>
//       <div>
//         <button
//           style={{ backgroundColor: color, width: 80, height: 40, margin: 32 }}
//           type="button"
//           onClick={() => setColor(color == "blue" ? "red" : "blue")}
//         >
//           Go {color == "blue" ? "red" : "blue"}
//         </button>
//       </div>
//     </section>
//   );
// }

// function ChangeText() {
//   const [text, setText] = useState("Hello world");
//   const [color, setColor] = useState("#ff0080");

//   return (
//     <section>
//       <div className="text-color-demo">
//         <h1 style={{ color }}>{text}</h1>
//         <div className="controls">
//           <input
//             aria-label="ข้อความ"
//             type="text"
//             value={text}
//             onChange={(event) => setText(event.target.value)}
//           />
//           <input
//             aria-label="สีข้อความ"
//             type="color"
//             value={color}
//             onChange={(event) => setColor(event.target.value)}
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// function Counter() {
//   const [count, setCount] = useState(1);

//   return (
//     <section>
//       <div className="counter-demo">
//         <strong>{count}</strong>
//         <div className="counter-buttons">
//           <button type="button" onClick={() => setCount(count + 1)}>
//             Count Up
//           </button>
//           <button type="button" onClick={() => setCount(count - 1)}>
//             Count Down
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

function App() {
  return (
    <div>
      <FoodContainer />
    </div>
  );
}

export default App;
