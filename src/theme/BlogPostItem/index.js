import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import AIMetadataDisplay from '@site/src/components/AIMetadataDisplay';

export default function BlogPostItemWrapper(props) {
  const { metadata } = props.content;
  
  return (
    <>
      <AIMetadataDisplay metadata={metadata} />
      <BlogPostItem {...props} />
    </>
  );
}