import { useDispatch, useSelector } from "react-redux";
import { decNum, incNum } from "./actions";
import "./styles.css";

export default function App() {
  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1 style={{ textAlign: "center", color: "#ffffff" }}>
        Counter <span style={{ color: "#ffffff" }}>Using</span> Redux
      </h1>
      <div class="mangekyou">
        <div class="point"></div>
        <div class="point"></div>
        <div class="point"></div>
        <div class="circle"></div>
      </div>
      <h5>
        Hi everyone , this is a basic redux counter created by me in the easiest
        way possible, fork this sandboox and enjoy 😉
      </h5>
      <div className="counter">
        <button className="btn1" onClick={() => dispatch(decNum())}>
          -
        </button>
        <input type="text" value={myState} />
        {/* <h5>{myState}</h5> */}
        <button className="btn2" onClick={() => dispatch(incNum())}>
          +
        </button>
      </div>
    </div>
  );
}
