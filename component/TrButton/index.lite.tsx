import {
  onMount,
  useStyle,
  Slot,
  useDefaultProps,
  useStore,
} from "@builder.io/mitosis";
import { useState } from "@builder.io/mitosis";
useDefaultProps({
  type: "primary",
  size: 'middle'
});
useStyle(`
.button-container{
  display:inline-block;

}
.button-container + .button-container{
  margin-left: 20px;
}
button {
  color: white;
  box-shadow: 1px 1px 5px 0px #078AFE;
  border-radius: 2px;

}
.button-color--primary {
  background: linear-gradient(209deg, #0EBBFF 0%, #0685FE 100%);

}
.button-color--danger {
  background: #D40000;
}
.button-color--normal{
  background: #FFFFFF;
  color: #000;
}
.button-color--info{
  background: #ED6A0C;
}
.button-size--samll{
  padding: 3px 8px;
}
.button-size--middle{
  padding: 6px 16px;
}
.button-size--middle{
  padding: 9px 24px;
}
`);
interface Props{
  type:string,
  size:string,

}
export default function TrButton(props:Props) {
  const [name, setName] = useState("Alex");

  const state= useStore({
  });
  return (
    <>
      <div class="button-container">
        <button
          class={` button-color--${props.type} button-size--${props.size}`}
          css={{}}
        >
          <Slot></Slot>
        </button>
      </div>
    </>
  );
}
