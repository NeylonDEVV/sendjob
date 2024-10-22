import Image from "next/image"


export default function NavBar() {

  return (
    <div className="flex w-full items-center justify-center">
      <Image src="/images/logo.png" alt="logo" width={100} height={100} />
    </div>
  )
}