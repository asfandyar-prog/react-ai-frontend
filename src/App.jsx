const Message=(props)=>{
  const {message,color}=props;

  return <div style = {{
    color:"color"
    }}>
    {message}
  </div>  
};


const App = () => {
  console.log("App component rendered")
  return <div>
    <Message message="Hello, world!"
    color="blue"
    />
    <Message message="Hey, world!"
    color="pink"
    />
    <Message message="bye, world!"
    bgcolor="red"
    />
    todo
  </div>
}

export default App