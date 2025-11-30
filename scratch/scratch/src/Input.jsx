export default function Input(props) {
    // return a <textarea> if a richText prop is true
    // return an <input> otherwise
    // forward / set the received props on the returned elements
   
    
    return (
        <section>
            {
                props.richText ? <textArea {...props}/> : <input {...props} />
            
            }
        </section>  
    );
  
}
