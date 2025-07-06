
const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img 
        src="/lovable-uploads/61036253-22eb-4b25-8100-5ca6f9997157.png" 
        alt="GoService Logo" 
        className="h-16 w-auto object-contain"
      />
    </div>
  );
};

export default Logo;
