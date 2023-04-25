// import React from "react";
// import PropTypes from "prop-types";


// const ActionButton = ({
//   text,
//   type = "primary",
//   size = "sm",
//   frontIcon = "",
//   isAnimated = false,
//   animatedType = "ping",
// }) => {
//   const buttonClass = `${type} ${size} font-bold rounded-lg outline-none focus:outline-none text-sm shadow hover:shadow-lg ease-linear transition-all duration-150`;

//   const frontIconComponent =
//     frontIcon !== "" ? <Fa icon={frontIcon} /> : null;

//   const animatedComponent =
//     isAnimated && animatedType === "spin" ? (
//       <Fa icon="spinner" className="animate-spin" />
//     ) : (
//       <>
//         {animatedType === "ping" && (
//           <span className="absolute -bottom-0 -left-0 flex h-4 w-4">
//             <span className="animate-ping absolute inline-flex top-0 left-0 h-4 w-4 rounded-full bg-site-green-5 opacity-75"></span>
//             <span className="absolute top-1 left-1 rounded-full h-2 w-2 bg-site-green-2"></span>
//           </span>
//         )}

//         {animatedType === "pulse" && (
//           <span className="absolute top-0 -right-0 flex h-4 w-4">
//             <span className="animate-pulse h-4 w-4 rounded-full bg-site-green-5"></span>
//           </span>
//         )}
//       </>
//     );

//   return (
//     <div className="relative">
//       <button className={buttonClass}>
//         {frontIconComponent}
//         {text}
//         {animatedComponent}
//       </button>
//     </div>
//   );
// };

// ActionButton.propTypes = {
//   text: PropTypes.string.isRequired,
//   type: PropTypes.oneOf(["primary", "secondary", "tertiary", "quaternary"]),
//   size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
//   frontIcon: PropTypes.string,
//   isAnimated: PropTypes.bool,
//   animatedType: PropTypes.oneOf(["spin", "ping", "pulse"]),
// };

// export default ActionButton;