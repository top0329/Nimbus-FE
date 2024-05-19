const Balance = () => {
    const balance = 50;
    return (
        <div className="absolute left-[30%] md:relative md:left-0 px-0 md:px-2 z-0">
            <div className="flex flex-row cursor-pointer h-[40px] md:w-[120px] w-0 border:none text-[14px] box-border rounded-full md:border-[1px] items-center justify-center"
                style={{ borderColor: "#dde1e6", backgroundColor: "#f0f5fa" }}
            >
                < img src="/walletBtn.svg" alt="Icon" /> {/* Use the SVG icon here */}
                < span className="ml-2 text-[15px] md:text-[18px] md:block hidden" style={{ color: "#4D8CEC" }} >${balance}</span > {/* Add your button text here */}
            </div >
        </div>

    );
};

export default Balance;
