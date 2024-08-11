import React, { useLayoutEffect, useRef, useState } from "react";
import Tooltip from "./Tooltip";
import Typography from "./Typography";
import RoundedEmoji from "./RoundedIcon";
import { emojis } from "@/constants";
import { CustomInputEvent } from "@/types/formTypes.type";

interface EmojiInputProps {
  onChange: (
    event: React.ChangeEvent<HTMLTextAreaElement> | CustomInputEvent
  ) => void;
  value: string;
  name: string;
}

const EmojiInput: React.FC<EmojiInputProps> = ({ onChange, name, value }) => {
  const [showPicker, setShowPicker] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-center space-y-4 cursor-pointer">
      <Tooltip
        show={showPicker}
        setShow={setShowPicker}
        content={
          <div className="border border-gray-300 rounded-md p-2 grid grid-cols-4 gap-2">
            {emojis.map((emoji) => {
              return (
                <button
                  key={emoji}
                  name={name}
                  onClick={() => {
                    onChange({ target: { name, value: emoji } });
                    setShowPicker(false);
                  }}
                  className="text-2xl"
                >
                  <Typography size="lg">{emoji}</Typography>
                </button>
              );
            })}
          </div>
        }
      >
        <RoundedEmoji emoji={value} />
      </Tooltip>
    </div>
  );
};

export default EmojiInput;
