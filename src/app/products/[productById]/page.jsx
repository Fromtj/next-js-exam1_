

import Image from "next/image"
import { todos } from "@/data/todos"; // Подключите ваш источник данных
// Генерация статических путей
export async function generateStaticParams() {
    return todos.map((todo) => ({
        productById: todo.id.toString(),
    }));
}

// Компонент страницы
export default function ProductPage({ params }) {
    const product = todos.find((el) => el.id.toString() === params.productById);

    if (!product) {
        return <div>Product not found!</div>;
    }

    return ( <>
         <section className="w-[100%] flex items-center my-[60px] justify-between">
         {/* <span>{param}</span> */}
         <div className="w-[49%]">
             <Image className="w-[100%]" src={product.img} />  
         </div>
         <div className="w-[49%] grid grid-cols-1 gap-[20px]">
             <h1 className="text-[40px] font-[700] text-[#222222D6]">{product.title}</h1>
             <div className="flex justify-between items-center">
             <span className="text-[#235275] text-[28px] font-[700]">{product.price}</span>
             <svg width="104" height="48" viewBox="0 0 104 48" fill="none" xmlns="http://www.w3.org/2000/svg">
 <rect y="4" width="40" height="40" rx="4" fill="#E03535"/>
 <rect x="58" y="2" width="44" height="44" rx="6" fill="#222222" stroke="#BA5D2C" stroke-width="4"/>
 </svg>
             </div>
             <p className="text-[18px] text-[#235275] font-[500]">Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic  chillwave  trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge </p>
             <button className="text-white bg-[#BA5D2C] py-[14px] px-[20px] rounded-[4px] w-[px]">ADD TO CART</button>
         </div>
     </section>
</>);
}