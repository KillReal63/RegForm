const TextArea = () => {
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <label htmlFor='story'>О себе</label>
      <textarea id='story' name='story' rows={5} cols={33}>
        It was a dark and stormy night...
      </textarea>
    </div>
  );
};

export default TextArea;
