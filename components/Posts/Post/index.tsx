import Avatar from "@/components/ui/Avatar";
import Dot from "@/components/ui/Dot";
import Typography from "@/components/ui/Typography";
import { PostSchema } from "@/constants/apiResponse";
import Image from "next/image";
import React from "react";
import CommentIcon from "@/public/icons/comment.svg";
import Container from "@/components/ui/Container";
import RoundedEmoji from "@/components/ui/RoundedIcon";

interface PostProps {
  data: PostSchema;
}

const Post: React.FC<PostProps> = ({ data }) => {
  const { name, time, content, comments, edited, imageURL, postMessageIcon } =
    data;
  return (
    <div className="post bg-grayCool-1 p-4 rounded-lg mb-3 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <Avatar height={10} width={10} src={imageURL} />
          <div className="flex flex-col items-start">
            <Typography className="text-grayCool-3" size="lg" weight="semibold">
              {name}
            </Typography>
            <div className="flex gap-1">
              <Typography size="sm" className="text-grayCool-4">
                {time}
              </Typography>
              {edited && (
                <div className="flex-center gap-1">
                  <Dot className="bg-grayCool-4" />
                  <Typography size="sm" className="text-grayCool-4">
                    Edited
                  </Typography>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="text-sm text-grayCool-3 cursor-pointer">...</div>
      </div>
      <Container className="bg-grayCool-5 p-3">
        <div className="flex justify-around gap-4">
          <div className="w-1/12">
            <RoundedEmoji emoji={postMessageIcon} />
          </div>
          <Typography size="base" className="text-gray-300 mb-2">
            {content}
          </Typography>
        </div>
      </Container>
      <div className="flex items-center gap-1 text-sm text-gray-500">
        <Image height={20} width={20} src={CommentIcon} alt="comment icon" />
        <Typography size="sm" className="text-grayCool-4">
          {comments} comments
        </Typography>
      </div>
    </div>
  );
};

export default Post;
