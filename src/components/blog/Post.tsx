"use client";

import { Card, Column, Media, Row, Avatar, Text } from "@once-ui-system/core";
import { formatDate } from "@/utils/formatDate";
import { person } from "@/resources";
import type { PostData } from "@/utils/utils";

interface PostProps {
  post: PostData;
  thumbnail: boolean;
  direction?: "row" | "column";
}

export default function Post({ post, thumbnail, direction }: PostProps) {
  if (!post || !post.metadata) {
    return null;
  }
  return (
    <Card
      fillWidth
      key={post.slug}
      href={post?.slug ? `/blog/${post.slug}` : "#"} // href={`/blog/${post.slug}`}
      transition="micro-medium"
      direction={direction}
      border="transparent"
      background="transparent"
      padding="4"
      radius="l-4"
      gap={direction === "column" ? undefined : "24"}
      s={{ direction: "column" }}
    >
      {/* {post.metadata.image && thumbnail && ( */}
      {post?.metadata?.images?.length > 0 && thumbnail && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gridTemplateRows: "1fr 1fr",
            gap: "8px",
            width: "100%",
            height: "420px",
            overflow: "hidden",
            borderRadius: "16px",
          }}
        >
          {/* Feed */}
          <div
            style={{
              gridRow: "1 / span 2",
              overflow: "hidden",
              borderRadius: "16px",
            }}
          >
            <img
              src={post.metadata.images[0]?.src}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Story */}
          <div
            style={{
              overflow: "hidden",
              borderRadius: "16px",
            }}
          >
            <img
              src={post.metadata.images[1]?.src}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Landscape */}
          <div
            style={{
              overflow: "hidden",
              borderRadius: "16px",
            }}
          >
            <img
              src={post.metadata.images[2]?.src}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      )}
      {/* {post?.metadata?.image && thumbnail && (
        <Media
          priority
          sizes="(max-width: 768px) 100vw, 640px"
          border="neutral-alpha-weak"
          cursor="interactive"
          radius="l"
          src={post?.metadata?.image || ""}
          alt={`Thumbnail of ${post.metadata.title}`}
          aspectRatio="16 / 9"
        />
      )} */}
      <Row fillWidth>
        <Column
          maxWidth={28}
          paddingY="24"
          paddingX="l"
          gap="20"
          vertical="center"
        >
          <Row gap="24" vertical="center">
            <Row vertical="center" gap="16">
              <Avatar src={person.avatar} size="s" />
              <Text variant="label-default-s">{person.name}</Text>
            </Row>
            <Text variant="body-default-xs" onBackground="neutral-weak">
              {post?.metadata?.publishedAt
                ? formatDate(post.metadata.publishedAt, false)
                : ""}
            </Text>
          </Row>
          <Text variant="heading-strong-l" wrap="balance">
            {post?.metadata?.title || "Untitled"}
          </Text>
          {post.metadata.tag && (
            <Text variant="label-strong-s" onBackground="neutral-weak">
              {post.metadata.tag}
            </Text>
          )}
        </Column>
      </Row>
    </Card>
  );
}
