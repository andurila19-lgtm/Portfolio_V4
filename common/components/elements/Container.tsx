interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  [propName: string]: React.ReactNode | string | undefined;
}

const Container = ({ children, className = "", ...others }: ContainerProps) => {
  return (
    <div className={`p-0 sm:p-2 ${className}`} {...others}>
      {children}
    </div>
  );
};

export default Container;
