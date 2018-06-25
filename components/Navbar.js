import Link from 'next/link';

const Navbar = () => (

		<div>
        <ul>
		
			<li> <Link href="/"><a> Home </a></Link> </li>
			<li> <Link href="about"><a> About </a></Link> </li>
    
		</ul>

		<style jsx>{`

			ul {
				padding:20px 0;
				display:flex;
				background: #000;
				color:#fff;
				margin:0;
			}

			ul li {
				list-style:none;

			}
			ul li a {
				color:#fff;
				text-decoration:none;
				margin-left: 20px;
			}
		
		`}</style>

		
		</div>

); 

export default Navbar;