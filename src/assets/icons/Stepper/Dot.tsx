const Dot = ({ color }: { color: string }) => {
  return (
    <div
      style={{
        backgroundColor: `${color}`,
        width: 28,
        height: 28,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
      }}
    ></div>
  );
};

export default Dot;
