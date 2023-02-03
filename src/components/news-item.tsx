import React from 'react';
import { AllDataTop100 } from './news';

function NewsItem({
  by,
  descendants,
  id,
  kids,
  score,
  time,
  title,
  type,
  url,
}: {
  by: string;
  descendants: number;
  id: number;
  kids?: number | number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}) {
  const dt = new Date(time * 1000).toLocaleString();
  return (
    <>
      <div>
        <h5>`Title: {title}`</h5>
        <h5>`Score: {score}`</h5>
        <h5>`By: {by}`</h5>
        <h5>`Time: {dt}`</h5>
      </div>
    </>
  );
}

export default NewsItem;
