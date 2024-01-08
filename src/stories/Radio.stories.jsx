import React from "react";
import { Radio } from "components";

export default {
  title: "desa_rawa_bangun/Radio",
  component: Radio,
};

export const SampleRadio = (args) => <Radio {...args} />;

SampleRadio.args = { label: "Radio", inputClassName: "mr-1" };
