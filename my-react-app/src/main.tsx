//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
//import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

class MyCar{
  constructor(name)
  {
    this.brand = name;
  }
   present(){
    return "I have a " + this.brand;
  }
}

class Model extends MyCar{
  constructor(name, mod){
    super(name);
    this.model = mod;
  }
   show(){
    return this.present() + ", it is a " + this.model;
  }
}

const  add2NumbersF1 = function () {
  return 5 + 10;
}

const  add2NumbersF2 = ()=> {
  return 20 + 10;
}

const  add2NumbersF3 = (a, b)=> {
  return a + b;
}

const  add2NumbersF4 = (a, b)=> a * b;

const myelement = (
 <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>);

  const myCar = new MyCar("Ford");

   const moCarInfo = new Model("Ford", "Mustang");


createRoot(document.getElementById('ajay')!).render(
 //myCar.present()
 //moCarInfo.show()
 //add2NumbersF1()  
 //add2NumbersF2()  
 //add2NumbersF3(20, 30)  
 add2NumbersF4(50, 70)
) 