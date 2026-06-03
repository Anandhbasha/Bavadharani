// const Card = ({props})=>{
//     return(
//         <div className="Cards" style={{backgroundColor:props.color,height:"300px",width:"300px",borderRadius:"25px"}}>
//             <div className="cardTop">
//                 <h1 style={{color:props.fontColor}}>Personal</h1>
//                 <h1  style={{color:props.fontColor}}>{props.price}</h1>
//                 <hr></hr>
//             </div>
//             <div className="cardBtm" style={{display:"flex",flexDirection:"column",textAlign:"left",paddingLeft:"25px"}}>
//                 <p><input type="checkbox"></input>Bussiness Solutions</p>
//                 <p><input type="checkbox"></input>Regular New Updates</p>
//                 <p><input type="checkbox"></input>Live Chat and Support</p>
//                 <p><input type="checkbox"></input>Social Media Marketing</p>
//             </div>
//             <div className="btn">
//                 <button style={{backgroundColor:props.btnColor,color:props.color}}>Select</button>
//             </div>
//         </div>
//     )
// }

// export default Card



const Card = ({color,btnColor,fontColor,price})=>{
    return(
        <div className="Cards" style={{backgroundColor:color,height:"500px",width:"300px",borderRadius:"25px",padding:"20px",display:"flex",gap:"20px",flexDirection:"column"}}>
            <div className="cardTop" style={{display:"flex",gap:"20px",flexDirection:"column"}}>
                <h1 style={{color:fontColor}}>Personal</h1>
                <h1  style={{color:fontColor}}>{price}</h1>
                <hr></hr>
            </div>
            <div className="cardBtm" style={{display:"flex",flexDirection:"column",textAlign:"left",paddingLeft:"25px",gap:"20px"}}>
                <p><input type="checkbox"></input>Bussiness Solutions</p>
                <p><input type="checkbox"></input>Regular New Updates</p>
                <p><input type="checkbox"></input>Live Chat and Support</p>
                <p><input type="checkbox"></input>Social Media Marketing</p>
            </div>
            <div className="btn">
                <button style={{backgroundColor:btnColor,color:color}}>Select</button>
            </div>
        </div>
    )
}

export default Card