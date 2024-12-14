'use client'
import { useState } from "react"
import img1 from '@/assets/images/img1.png';
import img2 from '@/assets/images/img2.png';
import img3 from '@/assets/images/img3.png';
import img4 from '@/assets/images/img4.png';
import Image from "next/image";
import Link from "next/link";

export default function Productspage() {
    const [data, setData] = useState([
        { id: 1, img: img1, title: 'High-Back Bench', price: '$9.99' },
        { id: 2, img: img2, title: 'Albany Table', price: '$9.99' },
        { id: 3, img: img3, title: 'Accent chair', price: '$9.99' },
        { id: 4, img: img4, title: 'High-Back Bench', price: '$9.99' },
    ]);

    return (
        <section className="grid grid-cols-3 gap-y-[25px] mt-[100px] xs:grid-cols-1 xs:gap-x-[20px]">
            {data.map((el) => {
                return (
                    <Link href={`/products/${el.id}`} key={el.id}>
                        <div className="w-[370px] text-center grid grid-cols-1 gap-[15px] px-[20px]">
                            <Image className="w-[370px]" src={el.img} alt={el.title} />
                            <p className="text-[#00000061] text-[16px] font-[700]">{el.title}</p>
                            <p className="text-[#222222] text-[16px] font-[700]">{el.price}</p>
                        </div>
                    </Link>
                );
            })}
        </section>
    );
}
