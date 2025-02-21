
interface FooterProps{
    size: 'large';
    children?: React.ReactNode;
}
const Footer: React.FC<FooterProps> = ({ size, children }) => {
    const sizeClasses = {
        large: 'h-[700px] w-full',
    };
  return (
    <div className={`bg-black text-white ${sizeClasses[size]}`}>
      {children}
    </div>
  )
}

export default Footer
