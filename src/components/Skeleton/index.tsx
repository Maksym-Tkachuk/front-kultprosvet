type SkeletonProps = {
  width?: string | number;
  height?: string | number;
  count?: number;
  borderRadius?: number;
};

const Skeleton = ({
  width = '100%',
  height = '100%',
  count = 1,
  borderRadius = 10,
}: SkeletonProps) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="bg-gray-300 rounded animate-pulse"
          style={{ width, height, borderRadius }}
        ></div>
      ))}
    </>
  );
};

export default Skeleton;
