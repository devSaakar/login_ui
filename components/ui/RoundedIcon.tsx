import React from "react";
import Typography from "./Typography";

interface RoundedEmojiProps {
  emoji: string;
  className?: string;
}

const RoundedEmoji: React.FC<RoundedEmojiProps> = ({ emoji, className }) => {
  return (
    <div
      className={`h-12 w-12 flex-center bg-grayCool-2 rounded-full ${
        className || ""
      }`}
    >
      <Typography size="lg">{emoji}</Typography>
    </div>
  );
};

export default RoundedEmoji;
