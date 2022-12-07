import React, { Component } from 'react';
import Welcome from './components/Welcome';
import Support from './components/Support';


const Hello = (props) => {
  return <h1>Meet the <i>{props.name}</i></h1>
}

function App() {
  const name = 'StarGazers'
  return (
    <div className="container">
      <article>
        <hgroup>
          <img src="images/group.svg" alt="StarGazers Group" />
          <Welcome name="Stars" />
          {/* <Hello name="StarGazers" /> */}
          <p>Members of an <b>intergalactic alliance</b><br />
            paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
          <Support></Support>
        </hgroup>
      </article>
    </div>
  )
}
export default App
