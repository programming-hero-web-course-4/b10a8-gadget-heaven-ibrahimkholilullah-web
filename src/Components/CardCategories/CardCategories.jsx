import { NavLink } from "react-router-dom";

const CardCategories = ({categories}) => {
    return (
        <div>
            
                <div role="tablist" className=" tabs-boxed bg-white border ">
                {
                    categories.map(category =>
                         <NavLink className={({isActive}) => `my-4 block tab border  bg-slate-100 ${isActive? "tab-active": ""}`} role="tab" key={category.id}>{category.category}</NavLink>)
                }
            </div>
        </div>
    );
};

export default CardCategories;