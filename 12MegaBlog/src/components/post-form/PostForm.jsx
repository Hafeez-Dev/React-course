import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select, RTE } from "../index";
import appwriteSercie from "../../appwrite/services";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PostForm({ post }) {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const { register, handleSubmit, control, watch, getValues, setValue } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.$id || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });

  return (
    <div>
      Post Form
    </div>
  );
}

export default PostForm;
