import { Button } from "ui";
import { Test } from "../components/Test";

export default function Page(props: any) {
  return (
    <div>
      <h1>Docs</h1>
      <Test></Test>
      <Button></Button>
      {props.children}
    </div>
  );
}
