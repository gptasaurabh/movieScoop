import loader from "/loader.gif";
import "@fontsource/dancing-script";


const Loading = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-black">
      <img src={loader} alt="" className="w-81 h-81 invert brightness-1"/>
      <h1 className="text-white text-4xl italic mt-4 drop-shadow-lg font-[Dancing Script]">
        Loading...
      </h1>
     
     
      
      
    </div>
  );
};

export default Loading;
