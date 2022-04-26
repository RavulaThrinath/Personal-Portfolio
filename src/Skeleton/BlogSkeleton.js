import React from "react";
import SkeletonElement from "./SkeletonElement";

const BlogSkeleton = () => {
  const lines = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  return (
    <div>
      <SkeletonElement type="image" />
      <SkeletonElement type="title" />
      {lines.map((n) => (
        <SkeletonElement type="text" key={n} />
      ))}
    </div>
  );
};

export default BlogSkeleton;
