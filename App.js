import React from 'react'
import Header from './Header'
import Main from './Main'
import Function from './Function'
import Function2 from './Function2'
import Class  from './Class'
import PProps from './PPropps'
import Class2 from './Class2'
import Function3 from './Function3'
import Statttt from './Statttt'
import Counter from './Counter'
import Hema from'./Hema'
import Class3 from './Class3'
import Destructoring from './Destructoring'

const App = () => (
  <div>
    <Header />
    <Main />
    <Function />
    <Function2 />
    <Class />
    <PProps name="values are using by this props property" ><button>I LOVE MOM</button></PProps>
    <Class2 name="..........." value="I" i="................">
      <button>I LOVE MOM</button>
      </Class2>
    <Class2 name="..........." value="Love" i="................"/>
    <Class2 name="..........." value="you" i="................"/>
    <Class2 name="..........." value="Mom" i="................"/>
    <Class2 name="..........." value="dad" i="................"/>
    <Class2 name="..........." value="," i="................"/>
    <Class2 name="..........." value="Annaya" i="................"/>
    <Class2 name="..........." value="," i="................"/>
    <Class2 name="..........." value="Vadina" i="................"/>
    <Class2 name="..........." value="," i="................"/>
    <Class2 name="..........." value="me" i="................"/>
    <Class2 name="..........." value="." i="................"/>
    <Function3 />
    <Statttt />
    <Counter />
    <Hema/>
    <Class3 />
    <Destructoring name=" Destructoring" value=" value"/>
  </div>
)

export default App
