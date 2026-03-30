const Box = (props)=>{
  console.log(props);
  return <div>
    i am a box
  </div>
}




const App = ()=>{
  return <div>
    <Box  label="my name is box" bgcolor="blue" />
    todo
  </div>;

}

export default App;

