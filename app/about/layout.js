import React from "react";

const layout = ({ children, userInfo, getData }) => {
  return (
    <div className="w-[80vw] mx-auto">
      <h1 className="font-bold text-xl mb-3">About layout</h1>
      <div>{children}</div>
      <div className="grid grid-cols-2 grid-rows-1 gap-3 mt-3">
        <div className="col-start-1 col-end-2 bg-sky-100">{userInfo}</div>
        <div className="col-start-2 col-end-3 bg-purple-300 h-[80vh] overflow-scroll">
          {getData}
        </div>
      </div>
    </div>
  );
};

export default layout;
