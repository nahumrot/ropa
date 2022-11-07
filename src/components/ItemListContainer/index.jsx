import React,{useState,useEffect} from 'react'
import Title from '../Title'
import ItemList from '../ItemList';
import { useParams } from 'react-router-dom';

const electro = [
    {id:1 , title:"Vestido de paracaídas con lazo en la cintura", Image: "https://shirelavrahami.com/wp-content/uploads/2022/09/BS_P4050-500x750.jpg", category:"vestidos" , price:10000 },
    {id:2, Image:"https://shirelavrahami.com/wp-content/uploads/2022/09/BS_P3518-500x750.jpg", title:"Vestido de vacaciones", category:"vestidos", price:15000 },
    {id:3, Image:"https://shirelavrahami.com/wp-content/uploads/2022/09/BS_P4353-500x750.jpg", title:"vestido informal", category:"vestidos", price:20000 },
    {id:4, Image:"https://imagenes.elpais.com/resizer/gmYm28EfIbdmOZHo2xNRgvx3YH8=/1200x0/filters:focal(209x290:219x300)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/2GOIWHMMHNFUNGKRSUACWF2YLI.png", title:"Mini bolsa de hombro transversal para celulares + ropa", category:"combos", price: 15000 },
];


export default function ItemListContainer({texo}) {
    const [data,setData] = useState([])

    const {categoriaId} = useParams()

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(electro);
            }, 1000);
        });
        if(categoriaId) {
            getData.then (res => setData(res.filter(vestidos => vestidos.category === categoriaId)))
        } else{
        getData.then (res => setData(res));} 
    },[categoriaId])

    

  return (
    <>
     <div className='header'>
        <div className='row'>
        </div>
      </div>
    <Title/>
    <ItemList data={data}/>
    </>
  )
}
