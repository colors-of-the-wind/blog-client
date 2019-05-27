import React from 'react';
import {Skeleton} from 'antd';
import {Link} from 'react-router-dom';

import ArticleLabel from '../ArticleLabel/';

import './index.less';

export default ({data, toPath, loading}) => (
  <div className="article">
    <Skeleton active loading={loading}>
      <Link to={toPath (data)} className="article">
        <img className="article-brief" src={data.figure} alt="brief" />
        <div className="article-info">
          <h2 className="article-title">{data.title}</h2>
          <p className="article-context">{data.abstract}</p>
          <div className="article-label">
            <ArticleLabel data={data} />
          </div>
        </div>
      </Link>
    </Skeleton>
  </div>
);
