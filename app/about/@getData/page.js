import React from "react";

const getData = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        cache: "no-cache",
      });
      const data = await res.json();
      resolve(data);
    }, 1500);
  });
};

const GetData = async () => {
  const data = await getData();
  return (
    <div>
      <h1>@getData</h1>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.title}</p>
            <p>{item.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default GetData;
