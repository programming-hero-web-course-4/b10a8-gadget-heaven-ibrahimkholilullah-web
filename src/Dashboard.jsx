import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { addFacorited, getAllFavorit, removedFavorit, removedFavoritAll } from './Components/CardCategories/CardJs';
import AddtoCard from './AddtoCard';
import { getAllWish, removedWishlist } from './Components/wishlist';
import WishList from './WishList';
import { useLoaderData, useNavigate } from 'react-router-dom';
import sucess from "../src/Components/Image/Group.png"

const Dashboard = () => {
    const navigate = useNavigate();
    const allData = useLoaderData()
    const [addCard , setAddCard] = useState(allData);
    const [addWish , setWishAdd] = useState([])

    useEffect(()=>{
        const favorited = getAllFavorit();
        setAddCard(favorited)
    },[])
    useEffect(()=>{
        const widhFavo = getAllWish();
        setWishAdd(widhFavo)
    },[]);

   const handleRemove = product_id =>{
    removedFavorit(product_id);
    const favorited = getAllFavorit();
    setAddCard(favorited)
   }
   const wishRemoves = product_id =>{
    removedWishlist(product_id)
    const widhFavo = getAllWish();
    setWishAdd(widhFavo)
   }

   const handleSort = sorting =>{
    if(sorting === 'price'){
        const newArray = [...addCard].sort((a,b) => a.price - b.price);
        setAddCard(newArray)
    }
   }

   const cartTotlaPrice = () => {
    let count = 0;
    addCard.forEach(
      product => count += product.price
    )
    return Math.round(count);
   }

   const clearPurchase = () => {
     setAddCard([]) 
     removedFavoritAll()
     navigate("/")
   }
   
    return (
        <div>
            <div className='text-center pt-2 bg-[#9538E2] text-white pb-10'>
            <h1 className='text-3xl font-bold my-3'>Dashboard</h1>
            <p className='text-sm'>Explore the latest gadgets that will take your experience to the next level. From smart devices <br /> to the coolest accessories, we have it all!</p>
            </div>
        
                <Tabs className="my-2 text-center -mt-4 ">
                <TabList className="border-none bg-[#9538E2] pb-16">
                 <Tab className="btn btn-wide border-2 ml-2 mb-2 md:mb-0 rounded-full mt-8 text-white bg-[#9538E2]" onClick={()=>null}>Card</Tab>
                 <Tab className="btn btn-wide border-2 ml-2 rounded-full bg-[#9538E2] text-white">Wishlist</Tab>
                </TabList>
                <TabPanel className="text-left mt-12">
                <div className='md:flex justify-between text-center md:text-left items-center'>
                <h1 className="text-xl font-bold">Card</h1>
                <div className='md:flex items-center gap-4'>
                    <p className='font-bold'>Totel Prices : $ {cartTotlaPrice()}</p>
                    <div>
                    <button onClick={()=> handleSort("price")} className='btn border-[#9538E2] bg-white rounded-full text-[#9538E2]'>Sort By Price</button>
                    <button className='btn bg-[#9538E2] text-white rounded-full ml-2' onClick={()=>document.getElementById('my_modal_5').showModal()}>Purchase</button>
                        
                         {/* Open the modal using document.getElementById('ID').showModal() method */}
                           <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                             <div className="modal-box text-center">
                                <img className='mx-auto my-2' src={sucess} alt="" />
                               <h3 className="font-bold text-lg">Payment Successfully!</h3>
                               <p className="py-4">Thanks for purchasing. <br />
                               Total:{cartTotlaPrice()}</p>
                               <div className=" w-full">
                                 <form className='w-full' method="dialog">
                                   {/* if there is a button in form, it will close the modal */}
                                   <button  className="btn w-full bg-[#9538E2] text-white" onClick={clearPurchase}>Close</button>
                                 </form>
                               </div>
                             </div>
                           </dialog>
                    </div>
                </div>
                </div>
                <div>
                    {
                        addCard.map(card => <AddtoCard handleRemove={handleRemove} key={card.product_id} card={card}  ></AddtoCard>)
                    }
                </div>
               </TabPanel>
               <TabPanel className="text-left">
               <h1 className="text-xl font-bold">Wishlist</h1>
                 <div>
                    {
                        addWish.map(wish => <WishList addCard={addCard} setAddCard={setAddCard} wishRemoves={wishRemoves} key={wish.product_id} wish={wish}></WishList>)
                    }
                 </div>
               </TabPanel>
               </Tabs>

        </div>

    );
};

export default Dashboard;