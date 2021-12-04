import React from 'react';
import style from './Home.module.css';

export default function Home() {
  return (
    <div className="container">
      <div className={style.home}>
        <h1>Welcome to our page</h1>
        <p className={style.par}>
          <h2 className={style.htwo}>Why is maths important? How does it affect our every day life?</h2> {/* eslint-disable-line */}
          You may have heard people say that the maths they learnt at school (specifically algebra or pythagoras’ theorem) is useless to them as adults, and that this has left them wondering “Why were we told maths is so important?”. {/* eslint-disable-line */}
          However, numeracy and maths is used far more often on a daily basis by everyone than we often realise.{/* eslint-disable-line */}
          Not always the angles of a triangle maybe, but there are calculations your brain will do fairly quickly without much thought if you have some simple maths skills secured.{/* eslint-disable-line */}
          <h2 className={style.htwo}>Maths is crucial! It’s all around us in the real world…</h2>{/* eslint-disable-line */}
          You might find yourself asking  “But why is maths important?” when for the 10,000th day in a row you have no need to add up all the angles in a square, but in reality there isn’t a day that goes by when you won’t use maths in one way or another. {/* eslint-disable-line */}
          When cooking, for example, you may need to double or halve a recipe, or add 2/3rds of the flour at the start and then the rest later. You mostly do this “by eye” but it is sound mathematical understanding which enables this skill. </p>{/* eslint-disable-line */}
      </div>
    </div>
  );
}
