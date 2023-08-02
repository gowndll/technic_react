import { Component, useState } from 'react';

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈' },
    { id: 2, text: '비' },
    { id: 3, text: '바람' },
    { id: 4, text: '재ㅏㄴ' },
  ]);

  const namesList = names.map((item) => {
    return (
      <li key={item.id} onDoubleClick={() => onRemove(item.id)}>
        {item.text}
      </li>
    );
  });

  const [inputText, setInputText] = useState('');
  const [nextId, setnextId] = useState(5);

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setnextId(nextId + 1);
    setNames(nextNames);
    setInputText('');
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  return (
    <div>
      <input type="text" value={inputText} onChange={onChange} />
      <button type="button" onClick={onClick}>
        추가
      </button>
      <ul>{namesList}</ul>
    </div>
  );
};

export default IterationSample;
