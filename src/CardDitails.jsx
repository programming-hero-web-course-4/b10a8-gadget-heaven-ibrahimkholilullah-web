import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import { GiSelfLove } from "react-icons/gi";
import { addFacorited } from './Components/CardCategories/CardJs';
import { addWishList } from './Components/wishlist';

const CardDitails = () => {

    
    const loadData = useLoaderData()
    const {product_id} = useParams()
    const [cardData, setCardData] = useState({})
    const [wishAdd, setWishData] = useState({})
    useEffect(()=>{
        const singleData = loadData.find(card => card.product_id == product_id);
        setCardData(singleData)
    },[loadData, product_id]);
    useEffect(()=>{
        const singleWish = loadData.find(card => card.product_id == product_id)
        setWishData(singleWish)
    },[loadData, product_id])
    const {rating,product_id: carrendId,Specification,description,price,product_image,product_title,category} = cardData || wishAdd;

    console.log(Specification)

  const handleFavorited = cardData =>{
    addFacorited(cardData)
}
const handleWish = wishAdd =>{
    addWishList(wishAdd)
   }

    return (
        <div>
            <div className='text-center pt-2 bg-[#9538E2] text-white  pb-32'>
            <h1 className='text-3xl font-bold my-3'>Product Details</h1>
            <p className='text-sm'>Explore the latest gadgets that will take your experience to the next level. From smart devices <br /> to the coolest accessories, we have it all!</p>
        </div>
        <div>
             <div className=" md:w-[1280px] mx-auto border-2 py-4 p-4 rounded-xl -mt-20 bg-white">
               <div className="md:flex justify-left items-center gap-4 border-2 rounded-xl">
                <div className="md:w-6/12 border-2 m-2">
                    <img className="md:ml-20 md:w-[500px] md:h-96 md:mt-20 md:my-4" src={product_image} alt="" />
                </div>
                <div className="bg-slate-100 p-4 rounded-xl">
                    <h2 className="text-3xl font-bold py-2">{product_title}</h2>
                    <p>Price : $ {price}</p>
                    <p className="my-2">Category : <button className="btn btn-sm bg-white rounded-full ml-4 border-[#309C08] text-[#309C08]">{category}</button></p>
                    <p className="text-lg">{description}</p>
                     <p className="text-lg font-bold my-3">Specification : </p>
                     {/* <div>
                     <ul>
                        {
                            Specification.map((config,index) => (<li className="list-disc  ml-5" key={index} >{config}</li>))
                        }
                     </ul>
                     </div> */}
                    <div>
                        <p className=" font-bold my-2">Rating : <span className="text-[#F9C004] ml-4"><i class="fa-regular fa-star text-[#F9C004] "></i></span></p>
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input
                              type="radio"
                              name="rating-6"
                              className="mask mask-star-2 bg-orange-400"
                               />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" defaultChecked/>
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <p className="ml-2">{rating}</p>
                        </div>
                       
                    </div>
                    <div className="my-3  flex justify-start items-center">
                        <div>
                        <button onClick={()=> handleFavorited(cardData)} className="btn text-white bg-[#9538E2] text-lg ">Add to card  <FaCartShopping size='20px' /></button>
                        </div>
                        <div>
                        <button onClick={()=> handleWish(wishAdd)} className="btn items-center bg-green-300 border-2 ml-4 text-lg "><GiSelfLove size="20px" /></button>
                        </div>
                    </div>
                </div>
               </div>
            </div>
             </div>
        </div>
    );
};

export default CardDitails;