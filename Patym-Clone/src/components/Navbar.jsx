function Navbar() {
  return (
    <>
      <header className="text-gray-600 body-font mx-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img
              className="w-[180px]"
              src="https://assetscdn1.paytm.com/images/catalog/category/5165/paytm_logo.png"
              alt="Paytm"
            />
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-lg justify-center">
            <a className="mr-5 text-myblack font-semibold">
              Paytm for Consumer
            </a>
            <a className="mr-5 text-myblack font-semibold">
              Paytm for Business
            </a>
            <a className="mr-5 text-myblack font-semibold">
              Investor Relations
            </a>
            <a className="mr-5 text-myblack font-semibold">Company</a>
            <a className="mr-5 text-myblack font-semibold">Career</a>
          </nav>
          <button className="inline-flex items-center bg-mySign text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded-[20px] text-base mt-4 md:mt-0 ">
            Sign In
            <img
              className="ml-[8px]"
              src="https://pwebassets.paytm.com/commonwebassets/paytmweb/header/images/loginImg.svg"
              alt=""
            />
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </button>
        </div>
      </header>
    </>
  );
}

export default Navbar;
