import React, { useRef, useEffect } from 'react'

import useCanvas from './useCanvas'

const Canvas = (props,tamanho) => {  
  
  const { draw,...rest } = props
  const canvasRef = useCanvas(draw,tamanho)
  
  return <canvas ref={canvasRef} {...rest}/>
}

export default Canvas