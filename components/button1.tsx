interface ButtonProps { name: string; }

const Button1 =(props: ButtonProps)=>{
    return(
    
            <section>
                <div className="bg-white border-[1px] w-[136px] h-[48px] pt-3 pb-3 pr-12 pl-12 gap-[10px]text-darkBlue font-bold text-base  flex justify-center text-center items-center"
                style={{letterSpacing:"0.1px"}}>{props.name}
               
                </div>
                
            </section>
        
    )
    }
    export default Button1