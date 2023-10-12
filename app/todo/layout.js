import React from "react";

async function auth() {
  let num = Math.random() * 10;
  return new Promise((resolve, reject) => {
    return num > 5 ? resolve(true) : resolve(false);
  });
}

const layout = async ({ children, data, login }) => {
  const isLogin = await auth();

  return (
    <div className="w-[80%] flex flex-col items-center justify-center gap-3 mx-auto">
      <div className="bg-blue-100 w-full ">{children}</div>
      {isLogin ? data : login}
    </div>
  );
};

export default layout;
