import { useRef,useEffect } from "react";
import zus from "../../store/zus";

const Two = () => {
    const data=useRef('')
    const setPp=zus((s)=>s.setPp)

useEffect(() =>{
  data.current.focus()
},[])

    const ss = (e) => {
            e.preventDefault();
            console.log(data.current.value);
            setPp(data.current.value)
            data.current.value=""

        }


  return (
    <div>
        <form onSubmit={ss}>
        <input ref={data} type="text" />
        <button type="submit">sym</button>

        </form>
       

    </div>
  )
}

export default Two