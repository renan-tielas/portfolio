import React, { useRef, useEffect } from 'react'

import useCanvas from './useCanvas'

const Canvas = (props) => {  
  
  const { draw,particulas,devolveParticulas,...rest } = props
  const canvasRef = useCanvas({draw,particulas,devolveParticulas})
  
  return <canvas ref={canvasRef} {...rest}/>
}

export default Canvas