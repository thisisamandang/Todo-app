import React from "react";
import styles from "./Button.module.css";

// styled-Component
// const Button = styled.button`
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #666;
//   color: white;
//   background: #666;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   @media (min-width: 768px) {
//     width: auto;
//   }

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #999;
//     border-color: #666;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;

// CSS MODULES
const Button = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
