const Footer = () => {
  return (
    <footer className="left-0 right-0 z-50 bg-black  absolute bottom-0 px-2">
      <div className="max-w-7xl mx-auto pt-7 pb-3 border-t border-gray-500 flex sm:justify-between justify-center items-center flex-wrap gap-5 ">

        <p className="text-gray-500 sm:text-left text-center">© 2025 Ali Malik . Dont steel - Be inspired insted!.</p>


        <div className="flex gap-3">
          <a href="https://github.com/alimalikali" className=" w-12 h-12 rounded-full flex justify-center items-center bg-gray-900 border border-gray-800">
            <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
          </a>
          <a href="https://twitter.com/AliMalikZulfqar" className=" w-12 h-12 rounded-full flex justify-center items-center bg-gray-900 border border-gray-800">
            <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
          </a>
          {/* <a className=" w-12 h-12 rounded-full flex justify-center items-center bg-gray-900 border border-gray-800">
            <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
          </a> */}
        </div>
      </div>

    </footer>
  );
};

export default Footer;
