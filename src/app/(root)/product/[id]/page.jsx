import React from 'react'

async function ProductDetail({params}) {
    const res = await fetch(`https://dummyjson.com/posts/${params.id}`);
    const resJson = await res.json();
  

  return (
    <div>
     

    </div>
  )
}

export default ProductDetail