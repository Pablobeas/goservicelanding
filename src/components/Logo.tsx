
const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img 
        src="/lovable-uploads/948411c4-fb90-4d5d-b4a8-3a4c64c55d37.png" 
        alt="GoService Logo" 
        className="h-96 w-auto md:h-[30rem] lg:h-[36rem] xl:h-[42rem] object-contain border-4 border-black rounded-lg shadow-2xl"
      />
    </div>
  );
};

export default Logo;
