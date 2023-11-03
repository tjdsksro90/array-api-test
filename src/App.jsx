import React, { useState } from "react";

function App() {
  const initialArray = ["apple", "banana", "cherry", "date", "elderberry"];
  const [array, setArray] = useState(initialArray);
  const [result, setResult] = useState("");
  const [query, setQuery] = useState(""); // input을 위한 value

  const handleForEach = function () {
    let temp = "";
    array.forEach(function (item, index) {
      temp += `${index}: ${item} / `;
    });
    setResult(temp);
  };

  const handleFilter = function () {
    let temp = "";
    temp = array.filter((item) => item.includes(query));
    setResult(temp.join(", "));
  };

  const handleMap = function () {
    let temp = "";
    temp = array.map((item) => item.toUpperCase());
    setResult(temp.join(", "));
  };

  const handelReduce = function () {
    let temp = "";
    temp = array.reduce((acc, cur) => `${acc} + ${cur}`);
    setResult(temp);
  };

  const handelPush = function () {
    if (query.length <= 0) {
      alert("input 박스에 내용을 입력해주세요");
      return false;
    }
    let temp = [...array, query];
    setArray(temp);
    setResult(temp.join(", "));
  };

  const handelPop = function () {
    // 1. 원본 배열을 통해 pop한 값을 저장함(임시 변수에)
    let temp = [...array];
    temp.pop();
    // 2. setArray
    setArray(temp);
    // 3. array를 기반으로 result 생성(setResult)
    setResult(temp.join(", "));
  };

  const handelSlice = function () {
    let temp = array.slice(1);
    setResult(temp.join(", "));
  };
  const handelSplice = function () {
    let temp = [...array];
    temp.splice(2, 2, "kiwi", "lime");
    setArray(temp);
    setResult(temp.join(", "));
  };
  const handelIndexOf = function () {
    let temp = array.indexOf(query);
    setResult(temp);
  };
  const handelIncludes = function () {
    let temp = array.includes(query);
    setResult(`${temp}`);
  };
  const handelFind = function () {
    let temp = array.find((item) => item.includes(query));
    setResult(temp);
  };
  const handelSome = function () {
    let temp = array.some((item) => item.includes(query));
    setResult(`${temp}`);
  };
  const handelEvery = function () {
    let temp = array.every((item) => item.includes(query));
    setResult(`${temp}`);
  };
  const handelSort = function () {
    let temp = [...array];
    temp.sort();
    setArray(temp);
    setResult(temp.join(", "));
  };
  const handelJoin = function () {
    let temp = array.join(", ");
    setResult(temp);
  };

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h1>배열 API 테스트</h1>
      <input
        type="text"
        placeholder="text"
        value={query}
        onChange={function (e) {
          setQuery(e.target.value);
        }}
      />
      <div className="button-wrap">
        <button onClick={handleForEach}>forEach</button>
        <button onClick={handleFilter}>filter</button>
        <button onClick={handleMap}>map</button>
        <button onClick={handelReduce}>reduce</button>
        <button onClick={handelPush}>push</button>
        <button onClick={handelPop}>pop</button>
        <button onClick={handelSlice}>slice</button>
        <button onClick={handelSplice}>splice</button>
        <button onClick={handelIndexOf}>indexOf</button>
        <button onClick={handelIncludes}>includes</button>
        <button onClick={handelFind}>find</button>
        <button onClick={handelSome}>some</button>
        <button onClick={handelEvery}>every</button>
        <button onClick={handelSort}>sort</button>
        <button onClick={handelJoin}>join</button>
      </div>
      <div>
        <h3>원본배열</h3>
        <p>{array.join(", ")}</p>
      </div>
      <div>
        <h3>결과물</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;
