interface ButtonProps { name: string; }

const Button2  =(props: ButtonProps)=>{
    return(
    
            <section>
                <div className="bg-[#2DC071] rounded-[5px] w-[184px] h-[52px] pt-[15px] pb-[15px] pr-10 pl-10 gap-[10px]  flex justify-center text-center items-center"  style={{letterSpacing:"0.1px"}}>{props.name}
                
                </div>
                
            </section>
        
    )
    }
    export default Button2