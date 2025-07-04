
const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img 
        src="/lovable-uploads/723d021a-3ca4-4e9e-ad92-ba123d6ffb6b.png" 
        alt="GoService Logo" 
        className="h-16 w-auto md:h-20 lg:h-24 object-contain"
      />
    </div>
  );
};

export default Logo;
