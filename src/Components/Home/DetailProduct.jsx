import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../../Data'

const DetailProduct = () => {
  const { id } = useParams()
  const productDetail = data.filter((item) => item.id == id)[0]

  return (
    <div>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur quasi facere error repellat dicta reprehenderit iste recusandae aut harum. Accusantium at iste sapiente quos temporibus aut magnam dolores quasi incidunt!askjh
      <h1>{productDetail.price}</h1>
    </div>
  )
}

export default DetailProduct
