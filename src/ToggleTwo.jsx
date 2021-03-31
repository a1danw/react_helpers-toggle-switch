import React, { useState } from "react";
import SwitchSelector from "react-switch-selector";

function ToggleTwo() {
  const [value, setValue] = useState(null);

  const options = [
    {
      label: "Foo",
      // value: {
      //   foo: true,
      // },
      value: "foo",
      selectedBackgroundColor: "#0097e6",
    },
    {
      label: "Bar",
      value: "bar",
      selectedBackgroundColor: "#fbc531",
    },
    {
      label: "FooBar",
      value: "foobar",
      selectedBackgroundColor: "green",
    },
  ];

  const onChange = (newValue) => {
    setValue(newValue);
  };

  console.log(options);
  const initialSelectedIndex = options.findIndex(({ value }) => value === "foo");
  // return (
  //   <div className="your-required-wrapper" style={{ width: 100, height: 30 }}>
  //     <SwitchSelector onChange={onChange} options={options} initialSelectedIndex={initialSelectedIndex} backgroundColor={"#353b48"} fontColor={"#f5f6fa"} />
  //     {value === "foo" ? <div>foo</div>  <div>bar</div>}
  //   </div>
  // );
  return (
    <div className="your-required-wrapper" style={{ width: 140, height: 30 }}>
      <SwitchSelector onChange={onChange} options={options} initialSelectedIndex={initialSelectedIndex} backgroundColor={"#353b48"} fontColor={"#f5f6fa"} />
      {value === null && <div>foo</div>}
      {value === "foo" && <div>foo</div>}
      {value === "bar" && <div>bar</div>}
      {value === "foobar" && <div>foobar</div>}
    </div>
  );
}

export default ToggleTwo;
