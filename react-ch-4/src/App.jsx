import React, { Children } from "react"
import Parent from "./Practice/Parent"
import TaskA from "./Ch-4-Tasks/Task_A/TaskA"
import { AuthProvider } from "./Ch-4-Tasks/Task_A/AuthContext"
import TaskB from "./Ch-4-Tasks/Task_B/TaskB"
import ThemeContext from "./Ch-4-Tasks/Task_B/ThemeContext"
import TaskC from "./Ch-4-Tasks/Task_C/TaskC"
import TaskD from "./Ch-4-Tasks/Task_D/TaskD"
import ThemeContextTaskD from "./Ch-4-Tasks/Task_D/ThemeContextTaskD"
import Reducer from "./Practice/Reducer"
import Store from "./Ch-4-Tasks/Task_E/Store"
import Cart from "./Ch-4-Tasks/Task_E/Cart"
import UserData from "./Ch-4-Tasks/Task_G/UserData"
import withUserData from "./Ch-4-Tasks/Task_G/HOC"
import UserProfile from "./Ch-4-Project/UserProfile"
import DashBoard from "./Ch-4-Project/DashBoard"


const WrappedUserData = withUserData(UserData);

function App() {
  return (
    <>
      {/* <Parent/>  */}
      {/* <AuthProvider>
        <TaskA />
      </AuthProvider> */}

      {/* Task-b */}
      {/* <ThemeContext>
          <TaskB/>
        </ThemeContext> */}
      {/* ------ */}

      {/* 
         <ThemeContext>
          <TaskC />
          <TaskB/>
        </ThemeContext>
         */}

      {/* <ThemeContext>
        <TaskC />

          <TaskD />
          <TaskB/>
        </ThemeContext> */}


      {/* <ThemeContextTaskD>
          <TaskD/>
        </ThemeContextTaskD> */}

      {/* <Reducer/> */}

      {/* <Cart>
      <Store/>
     </Cart> */}

      {/* HOC Task-G */}
      {/* <WrappedUserData /> */}

      {/* Project */}
      <UserProfile>
        <DashBoard />
      </UserProfile>
    </>


  )
}

export default App
