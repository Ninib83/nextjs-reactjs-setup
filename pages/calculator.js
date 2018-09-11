// const Index = () => (
//     <div classname="calculator">
//     <div className="calculator-disply">0</div>
//     <div className="calculator-keypad">
//     <div className="input-keys">
//     <div className="function-keys">
//     <Button className="calculator-key key-clear">AC</Button>
//     <Button className="calculator-key key-sign">+ -</Button>
//     <Button className="calculator-key key-procent">%</Button>
//     </div>
//     <div className="digit-keys">
//     <Button className="calculator-key key-0">0</Button>
//     <Button className="calculator-key key-dot">.</Button>
//     <Button className="calculator-key key-1">1</Button>
//     <Button className="calculator-key key-2">2</Button>
//     <Button className="calculator-key key-3">3</Button>
//     <Button className="calculator-key key-4">4</Button>
//     <Button className="calculator-key key-5">5</Button>
//     <Button className="calculator-key key-6">6</Button>
//     <Button className="calculator-key key-7">7</Button>
//     <Button className="calculator-key key-8">8</Button>
//     <Button className="calculator-key key-9">9</Button>
//     </div>
//     </div>
//     <div className="operators-keys">
//     <Button className="calculator-key key-divide">/</Button>
//     <Button className="calculator-key key-multyply">x</Button>
//     <Button className="calculator-key key-subtract">-</Button>
//     <Button className="calculator-key key-add">+</Button>
//     <Button className="calculator-key key-equals">=</Button>
//     </div>
//     </div>
//     </div>
//     <style>
//       html {
//   box-sizing: border-box;
// }
// *, *:before, *:after {
//   box-sizing: inherit;
// }

// body {
//   margin: 0;
//   font: 100 14px 'Roboto';
// }

// button {
//   display: block;
//   background: none;
//   border: none;
//   padding: 0;
//   font-family: inherit;
//   user-select: none;
//   cursor: pointer;
//   outline: none;
  
//   -webkit-tap-highlight-color: rgba(0,0,0,0);
// }

// button:active {
//   box-shadow: inset 0px 0px 80px 0px rgba(0,0,0,0.25);
// }

// #wrapper {
//   height: 100vh;
  
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }

// #app {
//   width: 320px;
//   height: 520px;
//   position: relative;
// }

// .calculator {
//   width: 100%;
//   height: 100%;
//   background: black;
  
//   display: flex;
//   flex-direction: column;
// }

// #wrapper .calculator {
//   box-shadow: 0px 0px 20px 0px #aaa;
// }

// .calculator-display {
//   color: white;
//   background: #1c191c;
//   line-height: 130px;
//   font-size: 6em;
  
//   flex: 1;
// }

// .auto-scaling-text {
//   display: inline-block;
// }

// .calculator-display .auto-scaling-text {
//   padding: 0 30px;
//   position: absolute;
//   right: 0;
//   transform-origin: right;
// }

// .calculator-keypad {
//   height: 400px;
  
//   display: flex;
// }

// .calculator .input-keys {
//   width: 240px;
// }

// .calculator .function-keys {
//   display: flex;
// }

// .calculator .digit-keys {
//   background: #e0e0e7;
  
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap-reverse;
// }

// .calculator-key {
//   width: 80px;
//   height: 80px;
//   border-top: 1px solid #777;
//   border-right: 1px solid #666;  
//   text-align: center;
//   line-height: 80px;
// }
// .calculator .function-keys .calculator-key {
//   font-size: 2em;
// }
// .calculator .function-keys .key-multiply {
//   line-height: 50px;
// }
// .calculator .digit-keys .calculator-key {
//   font-size: 2.25em;
// }
// .calculator .digit-keys .key-0 {
//   width: 160px;
//   text-align: left;
//   padding-left: 32px;
// }
// .calculator .digit-keys .key-dot {
//   padding-top: 1em;
//   font-size: 0.75em;
// }
// .calculator .operator-keys .calculator-key {
//   color: white;
//   border-right: 0;
//   font-size: 3em;
// }

// .calculator .function-keys {
//   background: linear-gradient(to bottom, rgba(202,202,204,1) 0%, rgba(196,194,204,1) 100%);
// }
// .calculator .operator-keys {
//   background:  linear-gradient(to bottom, rgba(252,156,23,1) 0%, rgba(247,126,27,1) 100%);
// }
//     </style>
//   )
  
//   export default Index