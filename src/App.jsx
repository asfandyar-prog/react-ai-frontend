const Title =()=>{
  console.log("Title component rendered");
  return <div>
    Hello my name is Asfand
  </div>
};

const Description =()=>{
  console.log("Description component rendered");
  return <div>
    I am a software engineer with experience in building web applications using React and Node.js. I have a strong background in JavaScript and enjoy working on both the frontend and backend of applications. I am passionate about learning new technologies and improving my skills as a developer.
  </div>
};


const App = ()=>{
  return <div>
    <Title />
    <Description />
    todo

  </div>
};
export default App;
