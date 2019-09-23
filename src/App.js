import React, { Component } from "react";
import "./App.css";

// class App extends Component {
//   // aquí se pueden crear diferentes métodos
//   render() {
// //     return (
// //       <div className="App">
// //         <h1> Hello Ironhackers! </h1>
// //       </div>
// //     );
// //   }
// // }


class App extends Component {

  render() {

    const formatName = (user) => {
      return `${user.firstName} ${user.lastName}`;
    }

    const user = {
      firstName: 'Dulce',
      lastName: 'Garcia',
      avatarUrl: 'https://www.ecestaticos.com/imagestatic/clipping/a13/0d9/a130d9fa63a69d89d280896d1331325f/cuando-empieza-el-otono-en-2019-la-estacion-llegara-con-mas-calor-de-lo-habitual.jpg?mtime=1566560976'
    };

    const displayAvartar = (user) => {
      if (user.avatarUrl) {
        return <img src={user.avatarUrl} />
      } else {
        return <img src='https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png' width='300' height='300' />
      }
    }
    const element = (
      <h2>
        Hello, {formatName(user)}!
      </h2>
    );

    return (
      <div className="App Panchito">
        <h1> Hello Ironhackers! </h1>
        {element}
        {displayAvartar(user)}
      </div>
    );
  }
}

export default App;