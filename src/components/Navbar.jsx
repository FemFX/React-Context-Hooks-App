import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Ninja Reading List</h1>
      <p>Currently you have {books.length} books to get through...</p>
    </div>
  );
};

export default Navbar;

// import React, { Component, useContext } from 'react';
// import { ThemeContext } from '../contexts/ThemeContext';
// import { AuthContext } from '../contexts/AuthContext';
// import { BookContext } from '../contexts/BookContext';

// class Navbar extends Component {
//   // static contextType = ThemeContext;
//   const { books } = useContext(BookContext)
//   render() {
//     return (
//       <AuthContext>
//         {authContext => (
//           <ThemeContext.Consumer>
//             {themeContext => {
//               const { isAuthenticated, toggleAuth } = authContext;
//               const { isLightTheme, light, dark } = themeContext;
//               const theme = isLightTheme ? light : dark;
//               return (
//                 <nav style={{ background: theme.ui, color: theme.syntax }}>
//                   <h1>Context App</h1>
//                   {/* <div onClick={() => toggleAuth()}>
//                     {isAuthenticated ? 'Logged in' : 'Logged out'}
//                   </div> */}
//                   <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>Contact</li>
//                   </ul>
//                 </nav>
//               );
//             }}
//           </ThemeContext.Consumer>
//         )}
//       </AuthContext>
//     );
//   }
// }

// export default Navbar;
