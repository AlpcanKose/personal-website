import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <nav className="grid grid-flow-col gap-4">
            <Link href={"/about"} className="link link-hover">About Me</Link>
            <Link href={"/portfolio"} className="link link-hover">Portfolio</Link>
            <Link href={"/contact"} className="link link-hover">Contact</Link>
        </nav> 
        <nav>
            <div className="grid grid-flow-col gap-4">
            <Link href="https://github.com/AlpcanKose"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
<path d="M25,8c9.389,0,17,7.611,17,17c0,7.548-4.921,13.944-11.729,16.163c0.002-0.006,0.005-0.016,0.005-0.016	s-1.147-0.538-1.123-1.498c0.027-1.056,0-3.521,0-4.426c0-1.553-0.983-2.654-0.983-2.654s7.709,0.087,7.709-8.139	c0-3.174-1.659-4.825-1.659-4.825s0.871-3.388-0.302-4.825c-1.315-0.142-3.669,1.257-4.675,1.91c0,0-1.593-0.653-4.244-0.653	c-2.65,0-4.244,0.653-4.244,0.653c-1.005-0.653-3.36-2.052-4.675-1.91c-1.173,1.437-0.302,4.825-0.302,4.825	s-1.659,1.652-1.659,4.825c0,8.226,7.709,8.139,7.709,8.139s-0.777,0.878-0.946,2.168c-0.538,0.183-1.33,0.408-1.969,0.408	c-1.673,0-2.946-1.626-3.412-2.379c-0.46-0.742-1.403-1.365-2.281-1.365c-0.579,0-0.861,0.289-0.861,0.62	c0,0.331,0.811,0.562,1.347,1.175c1.129,1.294,1.109,4.202,5.132,4.202c0.437,0,1.329-0.107,2-0.198	c-0.004,0.916-0.005,1.882,0.009,2.447c0.024,0.96-1.123,1.498-1.123,1.498s0.003,0.01,0.005,0.016C12.921,38.944,8,32.548,8,25	C8,15.611,15.611,8,25,8z"></path>
</svg></Link>
            <Link href="https://www.facebook.com/melanioss/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></Link>
            </div>
        </nav> 
        <aside>
            <p>Copyright © 2023 - All right reserved by Alpcan KÖSE</p>
        </aside>
        </footer>
  )
}

export default Footer