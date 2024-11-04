const Dashboard = () => {
    return (
        <div>
        <div className='text-center pt-2 bg-[#9538E2] text-white  pb-32'>
            <h1 className='text-3xl font-bold my-3'>Dashboard</h1>
            <p className='text-sm'>Explore the latest gadgets that will take your experience to the next level. From smart devices <br /> to the coolest accessories, we have it all!</p>
            <div className="my-4">
                <button className="btn btn-wide">Card</button>
                <button className="btn bg-[#9538E2] rounded-badge btn-wide text-white ml-4">Wishlist</button>
            </div>
        </div>
        </div>
    );
};

export default Dashboard;