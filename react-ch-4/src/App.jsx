import React from "react"
import Parent from "./Practice/Parent"
import TaskA from "./Ch-4-Tasks/Task_A/TaskA"
import { AuthProvider } from "./Ch-4-Tasks/Task_A/AuthContext"
import TaskB from "./Ch-4-Tasks/Task_B/TaskB"
import ThemeContext from "./Ch-4-Tasks/Task_B/ThemeContext"
import TaskC from "./Ch-4-Tasks/Task_C/TaskC"



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


         <ThemeContext>
          <TaskC />
          <TaskB/>
        </ThemeContext>
      
    </>


  )
}

export default App
