const ProgressBar = ({ color }: { color: string }) => {
  return (
    <div
      style={{
        width: 290,
        height: 8,
        backgroundColor: `${color}`,
        borderRadius: 8,
      }}
    ></div>
  );
};

export default ProgressBar;
