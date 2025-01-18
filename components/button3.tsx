interface ButtonProps { name: string; }

const Button3  =(props: ButtonProps)=>{
    return(
    
            <section>
                <div className="bg-white rounded-[5px] w-[184px] h-[52px] pt-[15px] pb-[15px] pr-10 pl-10 gap-[10px] text-[#2DC071] flex justify-center font-bold text-base text-center"   style={{letterSpacing:"0.2px"}}>{props.name}
                
                </div>
            </section>
        
    )
    }
    export default Button3