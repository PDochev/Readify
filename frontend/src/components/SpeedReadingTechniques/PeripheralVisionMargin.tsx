function PeripheralVisionMargin({ marginSide, peripheralOpacity, className }) {
  return (
    <div
      style={{
        width: `${marginSide}px`,
        opacity: `${peripheralOpacity}`,
      }}
      className={className}
    ></div>
  );
}

export default PeripheralVisionMargin;
