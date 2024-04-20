import { ArrowBigRight } from "lucide-react";
import OutsideClickHandler from "react-outside-click-handler";
import { useState } from "react";
export default function Dash_Slider() {
  const [open, setOpen] = useState((prv) => !prv);
  return (
    <>
      <OutsideClickHandler
        onOutsideClick={() => {
          setOpen((prv) => !prv);
        }}
      >
        {open ? (
          <>
            <section className="bg-primary-color w-[190px] min-h-screen absolute top-0 left-0"></section>
            <button
              onClick={() => setOpen((prv) => !prv)}
              className="absolute min-h-screen left-[400px]"
            >
              Click here
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setOpen((prv) => !prv)}
              className="absolute min-h-screen left-[400px]"
            >
              Click here
            </button>
          </>
        )}
      </OutsideClickHandler>
    </>
  );
}
