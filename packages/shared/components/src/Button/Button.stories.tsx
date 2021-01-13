import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

export const Default: React.VFC<{}> = () => <Button>Button</Button>;
