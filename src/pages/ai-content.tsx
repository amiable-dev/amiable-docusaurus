import React from 'react';
import Layout from '@theme/Layout';
import { usePluginData } from '@docusaurus/useGlobalData';

export default function AIContent() {
  const { blogs } = usePluginData('docusaurus-plugin-content-blog');
  
  const aiGeneratedPosts = blogs.filter(post => post.metadata.ai_generated);
  
  return (
    <Layout
      title="AI-Generated Content"
      description="Index of AI-generated and AI-assisted content">
      <main className="container margin-vert--lg">
        <h1>AI-Generated Content</h1>
        <div className="row">
          {aiGeneratedPosts.map((post) => (
            <div key={post.id} className="col col--6 margin-bottom--lg">
              <div className="card">
                <div className="card__header">
                  <h3>{post.title}</h3>
                </div>
                <div className="card__body">
                  <p>{post.description}</p>
                  <div className="margin-top--sm">
                    {post.metadata.ai_models?.map((model) => (
                      <span key={model.name} className="badge badge--secondary margin-right--sm">
                        {model.name}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="card__footer">
                  <a className="button button--secondary" href={post.permalink}>
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}