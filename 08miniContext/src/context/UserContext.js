// first we will create a variable to hold createc context and then we will throgh it 

import React, { useContext } from "react";

const UserContext = React.createContext();

export default UserContext;

// now it is become provider and it is accessible to all
// Access of user context will give to all cards or accesibke to whole fragments like usecontext, login , card , data
{/* <UseContext>
    <Login/>
    <Card>
        <Data/>
    </Card>
<UserContext/> */}