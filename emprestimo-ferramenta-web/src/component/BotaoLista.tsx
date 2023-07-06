// 'use client'
import Image from "next/image";
export default async function BotaoLista({
  icon,
  name,
  onClick,
}: {
  icon?: string;
  name?: string;
  onClick?: Function;
}) {
  return (
    <div
      onClick={() => onClick?.()}
      style={{
        marginLeft: "11px",
        width: 112,
        height: 57,
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          
          position: "absolute",
          background: "#5E79DB",
          borderRadius: "15px 15px 0 0 ",

        }}
      />
      <div
        style={{
          position: "absolute",
          zIndex: 1,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p style={{ paddingTop: "5px",fontSize:"15px" }}>{name}</p>
        {icon != undefined ? (
          <Image src={`/${icon}.png`} alt={"sexo"} width={35} height={35} />
        ) : null}
      </div>
    </div>
  );
}
