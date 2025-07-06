
const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img 
        src="/lovable-uploads/2fac1ae4-16e2-4211-819e-d45da979cf50.png" 
        alt="GoService Logo" 
        className="h-24 w-auto object-contain"
      />
    </div>
  );
};

export default Logo;
