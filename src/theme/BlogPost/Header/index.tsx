import React from 'react';
import BlogPostHeader from '@theme-original/BlogPost/Header';
import type { WrapperProps } from '@docusaurus/types';
import AIMetadata from './AIMetadata';

export default function BlogPostHeaderWrapper(
  props: WrapperProps<typeof BlogPostHeader>
): JSX.Element {
  return (
    <>
      <AIMetadata metadata={props.metadata} />
      <BlogPostHeader {...props} />
    </>
  );
}