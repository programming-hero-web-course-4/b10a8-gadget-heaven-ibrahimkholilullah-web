import React from 'react';

const Footer = () => {
    return (
        <div className='py-10 w-[1280px] mx-auto'>
            <div className='text-center border-b-2 pb-2'>
                <h1 className='text-2xl font-bold py-2'>Gadget Heaven</h1>
                <p>Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <footer className="footer text-base-content p-10">
  <nav>
    <h6 className= "font-bold text-lg text-black">Services</h6>
    <a className="link link-hover">Product Support</a>
    <a className="link link-hover">Order Tracking</a>
    <a className="link link-hover">Shipping & Delivery</a>
    <a className="link link-hover">Returns</a>
  </nav>
  <nav>
    <h6 className="font-bold text-lg text-black">Company</h6>
    <a className="link link-hover">About Us</a>
    <a className="link link-hover">Careers</a>
    <a className="link link-hover">Contact</a>
  </nav>
  <nav>
    <h6 className="font-bold text-lg text-black">Legal</h6>
    <a className="link link-hover">Terms of Service</a>
    <a className="link link-hover">Privacy Policy</a>
    <a className="link link-hover">Cookie Policy</a>
  </nav>
 
</footer>
        </div>
    );
};

export default Footer;