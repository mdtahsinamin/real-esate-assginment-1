/* eslint-disable react/prop-types */
const TextArea = ({ name, labelText, placeholder }) => {
  return (
    <div className="mb-[30px]">
      <label
        htmlFor={name}
        className="mb-4 block text-sm text-body-color dark:text-dark-6"
      >
        {labelText}*
      </label>
      <textarea
        name={name}
        rows="1"
        placeholder={placeholder}
        className="w-full resize-none border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-dark-6"
      ></textarea>
    </div>
  );
};

export default TextArea;
