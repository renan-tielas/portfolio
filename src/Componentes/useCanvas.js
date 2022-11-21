import { useRef, useEffect } from 'react'

const useCanvas = ({draw,particulas,devolveParticulas}) => {
  
  const canvasRef = useRef(null)
  
  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    context.clearRect(0, 0, context.canvas.width, context.canvas.height)
    context.beginPath()
    //   ctx.stroke();
// particulas=[];
    let frameCount = 0
    let animationFrameId
    canvas.width  = 700;
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
    
    return (particulas) => {
      window.cancelAnimationFrame(animationFrameId)
      devolveParticulas(particulas);
    }
  }, [draw])
  
  return canvasRef
}

export default useCanvas