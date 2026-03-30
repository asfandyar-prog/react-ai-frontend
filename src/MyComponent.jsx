const MyComponent = (props)=>{

    const {children,bgcolor,height}=props;
    return <div style ={
        {background:bgcolor,
        height:height + 'px'}
        }
    >
        <div>
            this is my 
        </div>
        <div>
            {children}
        </div>
    </div>

}

export default MyComponent;
