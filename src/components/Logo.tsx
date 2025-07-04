
const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/30">
        <img 
          src="/lovable-uploads/948411c4-fb90-4d5d-b4a8-3a4c64c55d37.png" 
          alt="GoService Logo" 
          className="h-64 w-auto md:h-80 lg:h-96 xl:h-[28rem] object-contain"
        />
      </div>
    </div>
  );
};

export default Logo;
