import { toast } from "react-toastify";

const getAllWish = ()=>{
    const all = localStorage.getItem("wishlist")
    if(all){
        const favorite = JSON.parse(all)
        return favorite;
    }
    else{
        return []
    }
}

const addWishList = (coffee) =>{
    const favorite = getAllWish();
    const isExist = favorite.find(item => item.product_id === coffee.product_id)
    if(isExist) return toast.error("all Ready Existed")
    favorite.push(coffee);
    localStorage.setItem('wishlist', JSON.stringify(favorite))
     toast.success("Product added to favorites!",{
        position:"top-left"
    })
}

// removed 

const removedWishlist = (product_id) =>{
    const favorite = getAllWish();
    const remaining = favorite.filter(coffee => coffee.product_id != product_id);
    localStorage.setItem('wishlist', JSON.stringify(remaining))
    toast.success("Product removed from favorites!",{
        position:"top-center"
    })

}

export {removedWishlist,addWishList,getAllWish}