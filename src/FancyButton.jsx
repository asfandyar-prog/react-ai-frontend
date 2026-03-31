const FancyButton=(props)=>{
    const {children,large}=props;
    const largeStyle = large? "text-lg font-bold rounded-full":"text-sm rounded md";
            return (<button className = { "bg-blue-500 hover:bg-blue-700 text-white font-bold px-10 py-2 px-4 rounded m-4" +""+ largeStyle}>
                {children}
            </button>
);
};

export default FancyButton;