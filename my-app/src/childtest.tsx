import React from "react";

interface ChildTestProps {
  name: string;
}

interface ChildTestState {
  testName: string;
}

export default class ChildTest extends React.Component<ChildTestProps, ChildTestState> {
  constructor(props: ChildTestProps) {
    super(props);
    this.state = {
      testName: props.name
    };
  }

  render(): React.ReactNode {
    const { testName } = this.state;
    return <div>
      child 입니다. {testName}을 전달받았습니다.
    </div>;
  }
}
