import React from "react";
import { Link } from "react-router-dom";
import service from "../appwrite/services"

function PostCard({
    $id,
    title,
    featuredImage,
}) {
  return (
    <div className="flex items-center justify-center w-screen min-h-screen p-10">
      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 max-w-6xl">
        <div className="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
          <div className="h-40 bg-gray-400 rounded-lg">
            <img src={service.getFilePreview(featuredImage)} alt={title} />
          </div>
          <div className="flex flex-col items-start mt-4">
            <h4 className="text-xl font-semibold">{title}</h4>
            <Link
              to={`/post/${$id}`}
              className="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase"
            >
              Click Here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
