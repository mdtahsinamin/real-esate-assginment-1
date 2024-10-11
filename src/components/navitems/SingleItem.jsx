// eslint-disable-next-line react/prop-types
const SingleItem = ({ itemName, url, innerStyle, listStyle }) => {
  return (
    <li className={listStyle}>
      <a href={url} className={innerStyle}>
        {itemName}
      </a>
    </li>
  );
};

export default SingleItem;
