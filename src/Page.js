import React from "react";
import { MOCK_DATA } from "../mock-data";

function Page() {
  return (
    <div>
      <h1>{MOCK_DATA.name}</h1>
      <image></image>
      <p>{MOCK_DATA.formatted_address}</p>
    </div>
  );
}

export default Page;
