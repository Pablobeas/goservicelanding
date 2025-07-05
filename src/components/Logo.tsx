
const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img 
        src="/lovable-uploads/ced89a3b-e95b-4918-9af7-5be230083cba.png" 
        alt="GoService Logo" 
        className="h-96 w-auto md:h-[30rem] lg:h-[36rem] xl:h-[42rem] object-contain rounded-lg shadow-2xl"
      />
    </div>
  );
};

export default Logo;
