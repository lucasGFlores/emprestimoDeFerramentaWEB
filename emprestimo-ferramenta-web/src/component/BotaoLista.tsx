
'use client'
export default async function BotaoLista({icon, name,handler} : {icon? : string, name?: string , handler? : Function}){
    return(
        
        <div onClick={() => handler} style={{marginLeft:"11px", width: 110, height: 45, position: "relative" }}>
        
        <div
          style={{
            width: 110,
            height: 45,
            left: 0,
            top: 0,
            position: "absolute",
            background: "#5E79DB",
            // boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: 17,
          }}
        />
        <div style={{position:"absolute", zIndex:1}}>
        <p style={{}}>{name}</p>
        </div>
        
        <div
          style={{
            width: 110,
            height: 31,
            left: 0,
            top: 14.23,
            position: "absolute",
            background: "#5E79DB",
          }}
        />
      </div>
    )
}