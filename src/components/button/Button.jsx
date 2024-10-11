// eslint-disable-next-line react/prop-types
const Button = ({ inputText, innerStyle, path }) => {
  return (
    <>
      <a href={path} className={innerStyle}>
        {inputText}
      </a>
    </>
  );
};

export default Button;
