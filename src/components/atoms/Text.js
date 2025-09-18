const Text = ({ children, className }) => {
  return <p className={`text-gray-800 ${className}`}>{children}</p>;
};

export default Text;
