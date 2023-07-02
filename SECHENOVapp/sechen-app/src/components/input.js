import { useState } from 'react';

function QuestionFormatter() {
//   const [name, setName] = useState('');
  const [num, setNum] = useState('');
  const [question, setQuestion] = useState('');
  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer3, setAnswer3] = useState('');
  const [answer4, setAnswer4] = useState('');
  const [output, setOutput] = useState('');

  function formatInput() {
    const answers = [answer1, answer2, answer3, answer4];
    const formattedAnswers = `{=<p>${answer1}\n</p>~<p>${answer2}\n</p>~<p>${answer3}\n</p>~<p>${answer4}\n</p>}`;
    const formattedOutput = `// question: ${num} name: Вопрос_${num} \n:: Вопрос_${num}::[html]<p>${question}\n</p>${formattedAnswers}`;
        setOutput(formattedOutput);
  }

  return (
    <div>
        <label htmlFor="num" >Номер вопроса</label> <br />
      <input type="text" id="num" value={num} onChange={e => setNum(e.target.value)} placeholder='Введите num вопроса' /><br />

      {/* <label htmlFor="name" >Название вопроса</label> <br />
      <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} placeholder='Введите название/номер вопроса' /><br /> */}

      <label htmlFor="question">Заголовок вопроса</label> <br />
      <input type="text" id="question" value={question} onChange={e => setQuestion(e.target.value)} placeholder='Введите заголовок вопроса' /><br />

      <label htmlFor="answer1">Первый ответ(верный)</label> <br />
      <input type="text" id="answer1" value={answer1} onChange={e => setAnswer1(e.target.value)} placeholder='Введите верный ответ... Не более 75 символов, включая пробелы.' /><br />

      <label htmlFor="answer2">Второй ответ</label> <br />
      <input type="text" id="answer2" value={answer2} onChange={e => setAnswer2(e.target.value)} placeholder='Введите неверный ответ... Не более 75 символов, включая пробелы.' /><br />

      <label htmlFor="answer3">Третий ответ</label> <br />
      <input type="text" id="answer3" value={answer3} onChange={e => setAnswer3(e.target.value)} placeholder='Введите неверный ответ... Не более 75 символов, включая пробелы.' /><br />

      <label htmlFor="answer4">Четвертый ответ</label> <br />
      <input type="text" id="answer4" value={answer4} onChange={e => setAnswer4(e.target.value)} placeholder='Введите неверный ответ... Не более 75 символов, включая пробелы.' /><br />

      <button onClick={formatInput}>Отформатировать вопрос</button>

      {output && (
    <div>
      <textarea readOnly value={output} />
      <button onClick={() => navigator.clipboard.writeText(output)}>Copy to Clipboard</button>
    </div>
  )}
    </div>
  );
}

export default QuestionFormatter;

