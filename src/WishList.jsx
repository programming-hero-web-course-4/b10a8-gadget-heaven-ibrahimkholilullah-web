import { MdOutlineDeleteForever } from "react-icons/md";
import { addFacorited } from "./Components/CardCategories/CardJs";

const WishList = ({addCard, setAddCard, wish, wishRemoves}) => {
    const {rating,product_id,Specification,description,price,product_image,product_title,category} = wish;

    const handleAdd = (obj) => {
        
        addFacorited(obj)
        wishRemoves(obj.product_id)
        setAddCard([...addCard, obj])
    }
    return (
        <div>
            <div className="md:flex justify-between items-center border-2 p-4 md:my-4 rounded-xl">
            <div className="md:flex gap-5 items-center rounded-xl ">
                <div>
                    <img className=" md:w-56 md:m-4 border md:p-4 rounded-2xl" src={product_image} alt="" />
                </div>
                <div>
                    <h1 className="text-4xl font-bold my-4">{product_title}</h1>
                    <p className="text-lg my-2">{description}</p>
                    <p className="text-lg font-bold">Price : $ {price}</p>
                    <p className="my-3 font-bold">Rating : {rating}</p>
                    <button className="text-white bg-[#9538E2] btn rounded-full" onClick={()=>handleAdd(wish)}>Add To card</button>
                </div>
            </div>
            <div onClick={()=> wishRemoves(product_id)} className=" p-2 md:bg-red-700 rounded-full text-yellow-400 cursor-pointer">
            <MdOutlineDeleteForever size="30px" />
            </div>
        </div>
        </div>
    );
};

export default WishList;