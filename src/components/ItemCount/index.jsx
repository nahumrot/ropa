import React,{useState, useEffect} from 'react'
import './itemCount.css'

export default function ItemCount({initial, stock, onAdd}) {
    const [count, setCount] = useState(parseInt(initial));

    const decrece = () => {
        setCount(count -1);
    }
    const crece = () => {
        setCount(count+1);
    }

    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial])

  return (
    <div className='counter'>
        <button disabled= {count <= 1} onClick={decrece}>-</button>
        <span>{count}</span>
        <button disabled= {count >= stock} onClick={crece}>+</button>
        <div>
            <button disabled={stock <= 0 } onClick={() => onAdd (count)} > Agregar al carrito</button>
        </div>
    </div>
  )
}