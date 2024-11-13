import { useContext } from "react"
import { AppContext } from "../appInfo"
import NavBar from "./NavBar"

function Structure({ children }) {
  const { state } = useContext(AppContext)
  const { mobile } = state
  return (
    <div>
      {mobile
        ?
        <>
          { children }
          < NavBar />
        </>
        :
        <>
          <NavBar />
          {children}
        </>
      }

    </div>
  )
}

export default Structure