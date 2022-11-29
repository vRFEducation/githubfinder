// import React from 'react';

// const UserContext = React.createContext();

// export const UserProvider = UserContext.Provider;

// export const UserConsumer = UserContext.Consumer;

// export default UserContext;
// import React, { Component, useContext } from 'react';

// const UserContext = React.createContext({ userName: 'Vahid', age: 34 });

// export class App extends Component {
//   render() {
//     return (
//       // <UserContext.Provider>
//       <div>
//         <LeftMenu />
//       </div>
//       // </UserContext.Provider>
//     );
//   }
// }

// export const LeftMenu = () => {
//   const userInfo = useContext(UserContext);
//   return (
//     <div>
//       LeftMenu
//       <div>{userInfo.age}</div>
//       <UserMenu />
//     </div>
//   );
// };

// export class UserMenu extends Component {
//   static contextType = UserContext;
//   render() {
//     return (
//       <div>
//         {this.context.userName} - {this.context.age}
//       </div>
//     );
//   }
// }

// export default App;
