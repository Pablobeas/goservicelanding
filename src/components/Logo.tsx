
const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img 
        src="/lovable-uploads/ced89a3b-e95b-4918-9af7-5be230083cba.png" 
        alt="GoService Logo" 
        className="h-48 w-auto md:h-60 lg:h-72 xl:h-80 object-contain rounded-lg shadow-lg"
      />
    </div>
  );
};

export default Logo;
