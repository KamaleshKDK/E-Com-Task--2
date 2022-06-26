import './Header.css';

function Header() {
  return (

    <>
 <div className="header">
        <div className="headerTitles">
          <span className="headerTitleSm">Welcome To</span>
          <span className="headerTitleLg">Ecom</span>
        </div>
        <img
          className="headerImg"
          src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
        />
      </div>
    </>


  )
}

export default Header