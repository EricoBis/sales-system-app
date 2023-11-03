import React from "react";

function ContentContainer({ children }: { children: React.ReactNode }) {
  return <div className="m-20">{children}</div>;
}

export default ContentContainer;
