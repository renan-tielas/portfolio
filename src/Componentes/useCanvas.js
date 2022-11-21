import { useRef, useEffect } from 'react'

const useCanvas = draw => {
  
  const canvasRef = useRef(null)
  
  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let frameCount = 0
    let animationFrameId
    canvas.width  = 600;
canvas.height = 600;
    // function resizeCanvasToDisplaySize(canvas) {
    
    //   const { width, height } = canvas.getBoundingClientRect()
  
    //   if (canvas.width !== width || canvas.height !== height) {
    //     canvas.width = width
    //     canvas.height = height
    //     return true // here you can return some usefull information like delta width and delta height instead of just true
    //     // this information can be used in the next redraw...
    //   }
  
    //   return false
    // }
    
    const render = () => {
      frameCount++
    
      draw(context, frameCount)
   
      // animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])
  
  return canvasRef
}

export default useCanvas