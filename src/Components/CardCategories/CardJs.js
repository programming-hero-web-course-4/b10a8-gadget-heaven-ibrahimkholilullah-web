import { toast } from "react-toastify";

const getAllFavorit = () =>{
    const all = localStorage.getItem("favorite")
    if(all){
        const favorite = JSON.parse(all)
        return favorite;
    }
    else{
        return []
    }
}

const addFacorited = (coffee) =>{
    const favorite = getAllFavorit();
    const isExist = favorite.find(item => item.product_id === coffee.product_id)
    if(isExist) return toast.error("all Ready Existed",{
        position:"top-center"
    })
    favorite.push(coffee);
    localStorage.setItem('favorite', JSON.stringify(favorite))
    toast.success("Product added to favorites!",{
        position:"top-center"
    })
}

// removed 

const removedFavorit = (product_id) =>{
    const favorite = getAllFavorit();
    const remaining = favorite.filter(coffee => coffee.product_id != product_id);
    localStorage.setItem('favorite', JSON.stringify(remaining))
    toast.success("Product removed from favorites!",{
        position:"top-center"
    })

}

export {addFacorited,getAllFavorit,removedFavorit}
