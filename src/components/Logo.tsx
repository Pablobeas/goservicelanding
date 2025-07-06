
const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img 
        src="/lovable-uploads/61036253-22eb-4b25-8100-5ca6f9997157.png" 
        alt="GoService Logo" 
        className="h-48 w-auto md:h-60 lg:h-72 xl:h-80 object-contain rounded-lg"
      />
    </div>
  );
};

export default Logo;
