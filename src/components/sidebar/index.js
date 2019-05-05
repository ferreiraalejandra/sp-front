import React from 'react'
import { useState } from "react"
import Drawer from '@material-ui/core/Drawer'

const SPSideBar = () => {
  const [open, setOpen] = useState(true)
  return (
    <Drawer open={open} onClose={() => setOpen(false)}>
      <div
        tabIndex={0}
        role="button"
        onClick={() => setOpen(false)}
        onKeyDown={() => setOpen(false)}
      >
      Hola mundo
      </div>
    </Drawer >
  )
}

export default SPSideBar
