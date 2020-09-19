import {
  mod,
  React,
  ReactNilRender,
} from "./deps.ts";
import Counter from "./components/Counter.ts";

const main = async () => {
  ReactNilRender.render(<Counter />);

  const resp = await fetch("http://ifconfig.co/json");
  const data = await resp.json();

  const dir = `${Deno.cwd()}/data`;
  await mod.ensureDir(dir);
  await Deno.writeTextFile(`${dir}/a.json`, JSON.stringify(data));
};

try {
  main();
} catch (e) {
  console.error(e);
}
