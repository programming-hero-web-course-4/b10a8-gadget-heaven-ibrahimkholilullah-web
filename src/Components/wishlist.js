
const getAllWish = ()=>{
    const all = localStorage.getItem("favorite")
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
    if(isExist) return alert("all Ready Existed")
    favorite.push(coffee);
    localStorage.setItem('favorite', JSON.stringify(favorite))
}

// removed 

const removedWishlist = (product_id) =>{
    const favorite = getAllWish();
    const remaining = favorite.filter(coffee => coffee.product_id != product_id);
    localStorage.setItem('favorite', JSON.stringify(remaining))

}

export {removedWishlist,addWishList,getAllWish}