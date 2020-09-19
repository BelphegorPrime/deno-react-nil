import { React } from "../deps.ts";

function Counter() {
  const [number, setNumber] = React.useState<number>(0);
  React.useEffect(
    () => {
      setInterval(
        () => setNumber((a: number) => a + 1),
        1000,
      );
    },
    [],
  );
  console.log(number);

  // This is a logical component without a view, it renders nothing,
  // but it has a real lifecycle and is managed by React regardless.
  return null;
}

export default Counter