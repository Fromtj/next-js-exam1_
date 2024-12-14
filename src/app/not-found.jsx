import Link from "next/link"

export default function NotFound() {
    return(<section className="h-[100vh] flex justify-center items-center">
     <div className="text-center">
      <h2 className="text-[35px] font-[500] m-auto">Not Found</h2>
      <p className="font-[italic]">Could not find requested resource</p>
      <Link href="/" className="text-[20px] font-[400] hover:text-amber-600">Return Home</Link>
    </div>
    </section>)
}