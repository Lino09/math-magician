import React from 'react';
import style from './Quotes.module.css';

export default function Quotes() {
  return (
    <div className="container">
      <div className={style.quote}>
        <blockquote className={style.block}>“Solving a problem for which you know there’s an answer is like climbing a mountain with a guide, along a trail someone else has laid. In mathematics, the truth is somewhere out there in a place no one knows, beyond all the beaten paths. And it’s not always at the top of the mountain. It might be in a crack on the smoothest cliff or somewhere deep in the valley.”</blockquote><p className={style.author}>― Yoko Ogawa</p> {/* eslint-disable-line */}
      </div>
    </div>
  );
}
