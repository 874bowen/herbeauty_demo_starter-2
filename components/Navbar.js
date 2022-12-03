import React, { useState } from "react";
import Link from 'next/link';
import Image from "next/image";
import logo from "../public/assets/hb_logo.png";


const Navbar = () => {

	let name = "John";
	let email = "johndoe@gmail.com";
	
	let [number, setNumber] = useState(0);


	return (
		<div className="fixed w-full h-20 shadow-xl z-[100]">
			<div className="flex justify-between bg-[#292a5e] text-[#efd4e7]  items-center w-full h-full px-2 2xl:px-16">
				<Image
					src={logo}
					alt="/"
					width="70"
					height="70"
				/>
				<div>
					<ul className="items-center xs:gap-1 gap-3 flex">

						<Link href="/">
							<li className="ml-10 text-sm uppercase hover:border-b">
								<p className="hidden md:block mr-6">Welcome, {name}!</p>
							</li>
						</Link>
						
							<>
								<Link href="/cart">
									<button className="xs:p-0 text-sm">Cart {number}</button>
								</Link>
								<Link href="/" >
									<Image
										src={logo}
										alt="/"
										width="40"
										height="40"
										className="rounded-full ml-3 group-hover:opacity-20"
									/>
								</Link>
							</>
						

						{/* <Link href="/" onClick={signIn}>{(!session) &&
							<button>Login</button>
						}
						</Link> */}
					</ul>
				</div>
			</div>
		</div>
	);

};

export default Navbar;
