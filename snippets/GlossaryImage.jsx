export const GlossaryImage = ({ src, alt, width, height, ...props }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={{
        maxWidth: '100%',
        height: 'auto',
        ...props.style
      }}
      {...props}
    />
  );
};

