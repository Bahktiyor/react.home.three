import './AppCard.css'
function AppCard(props){
    return(
        <div id="none">
          <img style={{borderRadius:'10px', position:'relative', width:'450px', height:'250px',top:'10px'}} id='Imgs'  src={props.img} alt="" />
          <button style={{position:'relative',left:'10px',top:'20px',textAlign:'center',width:'80px',height:'30px',border:'none',borderRadius:'10px',cursor:'pointer',backgroundColor:'hsl(47, 88%, 63%)'}}>{props.button}</button>
          <p style={{position:'relative',left:'10px',top:'10px',fontFamily:'sans-serif',fontWeight:"200",fontSize:'20px',color:"hsl(0, 0%, 42%)"}}>{props.pTag}</p>
          <h1 style={{position:'relative', top:'-10px',cursor:'pointer',left:'10px',fontFamily:"sans-serif",fontWeight:'600',color:'hsl(47, 88%, 63%)'}}>{props.text}</h1>
          <p style={{position:'relative',left:'10px', wordBreak:'break-word',fontFamily:'paragraph',fontSize:'20px'}}>{props.TagP}</p>
        </div>
    )
}
export default AppCard;
