import Image from "next/image"

export default function Card({img,title,price}) {
    return(<>
    <div className="w-[370px] text-center grid grid-cols-1 gap-[15px]">
    <Image className="w-[370px]" src={`${img}`} alt="" />
    <p className="text-[#00000061] text-[16px] font-[700]">{title}</p>
    <p className="text-[#222222] text-[16px] font-[700]">{price}</p>
    </div>
    </>)
}