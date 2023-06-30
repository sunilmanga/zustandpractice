import zus from '../../store/zus'


const Li = () => {
    const pp=zus((s)=>s.pp)
  return (
    <div>
        {pp.map((item, index) => {
            return <li >{item}</li>
        })}
    </div>
  )
}

export default Li