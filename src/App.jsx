const Box = (props)=>{
  const {label , bgcolor , textcolor , large} = props;
  return <div style={{backgroundColor:props.bgcolor, color:props.textcolor,
    fontSize: props.large ? "30px" : "16px"
   }}>
    {label}
  </div>
}


const App = ()=>{
  return <div>
    <Box  label="my name is box" 
     bgcolor="blue" 
     textcolor="white"
     large={true} 
    />
    todo
  </div>;

}

export default App;






























