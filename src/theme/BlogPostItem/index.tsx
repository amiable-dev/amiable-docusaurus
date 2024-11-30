import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import type BlogPostItemType from '@theme/BlogPostItem';
import AIMetadataDisplay from '@site/src/components/AIMetadataDisplay';
import type {Props} from '@theme/BlogPostItem';

export default function BlogPostItemWrapper(props: Props): JSX.Element {
  const { content } = props;
  const { metadata } = content;
  
  return (
    <>
      <AIMetadataDisplay metadata={metadata} />
      <BlogPostItem {...props} />
    </>
  );
}
