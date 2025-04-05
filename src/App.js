import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [ans, setAns] = useState(0);
  const [display, setDisplay] = useState("0");
  const [eq, setEq] = useState(["0"]);

  const handleClick = (e) => {
    let val = e.target.value;
    let btn = e.target.name;
    let newEq = display;

    if (val == "clr") {
      setAns(0);
      setDisplay("0");
      setEq([]);
      return;
    }
    if (val == "=") {
      setDisplay(ans.toString());
      setAns(0);
      setEq([ans]);
      return;
    }

    if (btn == "meth") {
      if (newEq[newEq.length-1].match(/(\D)/)) {
        return;
      }
    }
    
    
    newEq = (val == "del") ? newEq.substring(0, newEq.length - 1) :
      (newEq == "0") ?  val : newEq.concat(val);
    
    setDisplay(newEq);

    let temp = newEq.split(/(\D)/).filter(t => t.trim());
    let final = parseInt(temp[0]);

    
    
    temp.forEach((x, ind) => {
      if (x == "*") {
        final *= parseInt(temp[ind+1]) || 1;
      } else if (x == "/") {
        final /= parseInt(temp[ind+1]) || 1;
      } else if (x == "-") {
        final -= parseInt(temp[ind+1]) || 0;
      } else if (x == "+") {
        final += parseInt(temp[ind+1]) || 0;
      }
      console.log(temp, final)
    });

    setAns(final);
    
  }


  return (
    <div className="mx-auto border border-black rounded bg-dark-subtle" style={{width: '20%', height: '80%'}}>
      <h3 className="border border-dark rounded bg-light m-2">{display}</h3>
      <h5 className="border border-dark rounded bg-light m-2">{ans}</h5>
      <div className="container">
        <div className="d-grid p-2 gap-2" style={{gridTemplateColumns: "1fr 1fr 1fr 1fr"}}>
          <button name="meth" value="clr" type="button" className="btn btn-info" onClick={handleClick}>C</button>
          <button name="meth" value="par" type="button" className="btn btn-info" onClick={handleClick}>+/-</button>
          <button name="del" value="del" type="button" className="btn btn-info" onClick={handleClick}>del</button>
          <button name="meth" value="/" type="button" className="btn btn-info" onClick={handleClick}>/</button>
          <button name="num" value="7" type="button" className="btn btn-info" onClick={handleClick}>7</button>
          <button name="num" value="8" type="button" className="btn btn-info" onClick={handleClick}>8</button>
          <button name="num" value="9" type="button" className="btn btn-info" onClick={handleClick}>9</button>
          <button name="meth" value="*" type="button" className="btn btn-info" onClick={handleClick}>x</button>
          <button name="num" value="4" type="button" className="btn btn-info" onClick={handleClick}>4</button>
          <button name="num" value="5" type="button" className="btn btn-info" onClick={handleClick}>5</button>
          <button name="num" value="6" type="button" className="btn btn-info" onClick={handleClick}>6</button>
          <button name="meth" value="-" type="button" className="btn btn-info" onClick={handleClick}>-</button>
          <button name="num" value="1" type="button" className="btn btn-info" onClick={handleClick}>1</button>
          <button name="num" value="2" type="button" className="btn btn-info" onClick={handleClick}>2</button>
          <button name="num" value="3" type="button" className="btn btn-info" onClick={handleClick}>3</button>
          <button name="meth" value="+" type="button" className="btn btn-info" onClick={handleClick}>+</button>
          <button name="num" value="0" type="button" className="btn btn-info" onClick={handleClick}>0</button>
          <button name="meth" value="=" type="button" className="btn btn-info" onClick={handleClick}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
