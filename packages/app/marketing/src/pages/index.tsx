import * as React from "react";
import { NextPage } from "next";
import { Button } from "@app/components";
import { capitalize } from "@app/functions";

const Index: NextPage = () => {
  // Render
  // -------------------------------------------

  const _renderTitle = () => {
    return capitalize("hello world");
  };

  return (
    <div>
      <h1>{_renderTitle()}</h1>
      <Button>Hello, this is a button</Button>
    </div>
  );
};

export default Index;
