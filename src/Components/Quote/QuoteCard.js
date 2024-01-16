import './QuoteCard.css'
 export default (props)=>{
    return (
        
    <div className="card" data-aos="fade-up">
        <h1>{props.quote}</h1>
        <p>{props.author}</p>
    </div>
    )
 }