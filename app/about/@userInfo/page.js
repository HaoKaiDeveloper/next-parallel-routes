import React from "react";
import Image from "next/image";

const getData = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "Bob",
        email: "bob123@gmail.com",
        age: 23,
        image:
          "https://fastly.picsum.photos/id/61/3264/2448.jpg?hmac=Xi3Kq99U5tueFi0aajgUP0yWAL4xwCHg5ZXGZRLTqyI",
      });
    }, 500);
  });
};

const page = async () => {
  const data = await getData();
  return (
    <div>
      @userInfo
      <p>name: {data.name}</p>
      <p>email: {data.email}</p>
      <p>age: {data.age}</p>
      <Image
        src={data.image}
        alt="img"
        width={200}
        height={200}
        style={{ objectFit: "cover" }}
        priority={true}
      />
    </div>
  );
};

export default page;
