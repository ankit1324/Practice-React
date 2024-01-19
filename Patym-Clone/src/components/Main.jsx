function Main() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <img
              className="w-[80px]"
              src="https://assetscdn1.paytm.com/images/catalog/view/310944/1654517453942.png"
              alt=""
            />
            <h1 className="title-font sm:text-5xl text-3xl mt-6 font-bold mb-4 text-myblack ">
              India Most-loved Payments App
            </h1>
            <p className="mb-8 font-medium leading-[30px] text-[20px] float-left w-[475px]">
              Recharge & pay bills, book flights & movie tickets, open a savings
              account, invest in stocks & mutual funds, and do a lot more.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex font-medium text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-white hover:border-solid hover:border-2 hover:border-black hover:text-black rounded-[25px] text-md">
                Download Paytm App
                <div className="mx-2 my-[5spx]">
                  <i className="fa-brands fa-apple fa-lg"></i>
                  <i className="ml-1 fa-brands fa-google-play fa-lg"></i>
                </div>
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://assetscdn1.paytm.com/images/catalog/view_item/850762/1656568118664.png"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
