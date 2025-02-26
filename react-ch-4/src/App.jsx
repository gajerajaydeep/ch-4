import React from "react"
import Parent from "./Practice/Parent"
import TaskA from "./Ch-4-Tasks/Task_A/TaskA"
import { AuthProvider } from "./Ch-4-Tasks/Task_A/AuthContext"
import TaskB from "./Ch-4-Tasks/Task_B/TaskB"
import ThemeContext from "./Ch-4-Tasks/Task_B/ThemeContext"



function App() {

  return (
    <>
      {/* <Parent/>  */}
      {/* <AuthProvider>
        <TaskA />
      </AuthProvider> */}
 
 {/* Task-b */}
        <ThemeContext>
          <TaskB/>
        </ThemeContext>
 {/* ------ */}
    </>
  )
}

export default App
