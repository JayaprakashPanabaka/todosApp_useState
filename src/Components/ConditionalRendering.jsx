//  Using an If...Else Statement

// function Item({ name, isPacked }) {
//     if (isPacked) {
//         return <li className="item">{name} ✔</li>;
//     }
//     else {
//         return <li className="item">{name}</li>;
//     } 
      
//   }
  
//   export default function PackingList() {
//     return (
//       <section>
//         <h3>Using an If...Else Statement</h3>
//         <ul>
//           <Item 
//             isPacked={true} 
//             name="Space suit" 
//           />
//           <Item 
//             isPacked={true} 
//             name="Helmet with a golden leaf" 
//           />
//           <Item 
//             isPacked={false} 
//             name="Photo of Tam" 
//           />
//         </ul>
//       </section>
//     );
//   }




//   Using Ternary Operators

// function Item({ name, isPacked }) {
//     return (
//       <li className="item">
//         {isPacked ? name + ' ✔' : name}          
//       </li>
//     );
//   }
  
//   export default function PackingList() {
//     return (
//       <section>
//         <h3>Using Ternary Operators</h3>
//         <ul>
//           <Item 
//             isPacked={true} 
//             name="Space suit" 
//           />
//           <Item 
//             isPacked={true} 
//             name="Helmet with a golden leaf" 
//           />
//           <Item 
//             isPacked={false} 
//             name="Photo of Tam" 
//           />
//         </ul>
//       </section>
//     );
//   }
  

//   Using Logical && Operator

  function Item({ name, isPacked }) {
    return (
      <li className="item">
        {name} {isPacked && '✔'}
      </li>
    );
  }
  
  export default function PackingList() {
    return (
      <section>
        <h3>Using Logical && Operator</h3>
        <ul>
          <Item 
            isPacked={true} 
            name="Space suit" 
          />
          <Item 
            isPacked={true} 
            name="Helmet with a golden leaf" 
          />
          <Item 
            isPacked={false} 
            name="Photo of Tam" 
          />
        </ul>
      </section>
    );
  }
  
  


  