
const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img 
        src="/lovable-uploads/948411c4-fb90-4d5d-b4a8-3a4c64c55d37.png" 
        alt="GoService Logo" 
        className="h-32 w-auto md:h-40 lg:h-48 xl:h-56 object-contain"
      />
    </div>
  );
};

export default Logo;
