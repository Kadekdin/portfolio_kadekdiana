import { getPosts, type PostData } from "@/utils/utils";
import { Grid } from "@once-ui-system/core";
import Post from "./Post";

interface PostsProps {
  range?: [number] | [number, number];
  columns?: "1" | "2" | "3";
  thumbnail?: boolean;
  direction?: "row" | "column";
  exclude?: string[];
}

export function Posts({
  range,
  columns = "1",
  thumbnail = false,
  exclude = [],
  direction,
}: PostsProps) {
  let allBlogs: PostData[] = getPosts(["src", "app", "blog", "posts"]) ?? [];

  // Exclude by slug (exact match)
  if (exclude.length) {
    // allBlogs = allBlogs.filter((post) => post?.slug && post?.metadata?.publishedAt);
    allBlogs = allBlogs.filter((post) => !exclude.includes(post.slug));
  }

  const sortedBlogs = allBlogs.sort((a, b) => {
    const dateA = new Date(a?.metadata?.publishedAt ?? 0).getTime();
    const dateB = new Date(b?.metadata?.publishedAt ?? 0).getTime();
    return dateB - dateA;
  });

  // const sortedBlogs = allBlogs.sort((a, b) => {
  //   return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  // });

  const displayedBlogs = range
    ? sortedBlogs.slice(
        range[0] - 1,
        range.length === 2 ? range[1] : sortedBlogs.length,
      )
    : sortedBlogs;

  return (
    <>
      {displayedBlogs.length > 0 && (
        <Grid
          columns={columns}
          s={{ columns: 1 }}
          fillWidth
          marginBottom="40"
          gap="16"
        >
          {displayedBlogs
            .filter((post) => post?.slug)
            .map((post) => (
              <Post
                key={post.slug}
                post={post}
                thumbnail={thumbnail}
                direction={direction}
              />
            ))}
        </Grid>
      )}
    </>
  );
}
