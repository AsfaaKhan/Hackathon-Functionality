interface ButtonProps { name: string; }


const Button =(props :ButtonProps)=>{
    return(
    
            <section>
                <div className="bg-skyblue rounded-[5px] w-[175px] h-[52px] pt-[12px] pb-[12px] pr-[10px] pl-[10px] gap-[10px] text-white font-bold justify-center text-base text-center"  style={{letterSpacing:"0.2px"}}>{props.name}
               
                </div>
                
            </section>
        
    )
    }
    export default Button