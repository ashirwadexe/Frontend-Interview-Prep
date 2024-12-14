// import React from "react";

// const Square = (props) => {
//   return (
//     <div
//         onClick={props.onClick}
//       style={{
//         border: "1px solid",
//         height: "100px",
//         width: "100px",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         cursor: "pointer",
//         margin: "3px",
//         backgroundColor: "white",
//       }}
//       className="Square"
//     >
//       <h5>{props.value}</h5>
//     </div>
//   );
// };

// export default Square;




import React from 'react'

const Square = (props) => {
  return (
    <div
        onClick={props.onClick}
        style={{
            border: "1px solid",
            height: "100px",
            width: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            margin: "2px",
            backgroundColor: "white", 
            borderRadius: "5px"                  
        }}
        className='Square'
    >
        <h5>{props.value}</h5>
    </div>
  )
}

export default Square