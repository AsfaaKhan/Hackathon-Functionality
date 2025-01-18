

interface ButtonProps { name: string; }

const SubmitButton =(props: ButtonProps)=>{
    return(
    
            <section>
                <div className=" rounded-[37px] border  border-skyblue  w-[184px] h-[52px] pt-[15px] pb-[15px] pr-[36px] pl-[36px] gap-[10px] text-skyblue font-bold text-sm leading-[24px] justify-center text-center items-center "  style={{letterSpacing:"0.2px"}}>{props.name}
                
                </div>
                
            </section>
        
    )
    }
    export default SubmitButton