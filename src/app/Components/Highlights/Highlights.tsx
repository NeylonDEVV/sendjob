import { FaTiktok, FaInstagram, FaRedditAlien } from "react-icons/fa";

export default function Highlights() {

  return (
    <div className="flex gap-9 items-center justify-center text-white">
      <p className="text-sm">Em destaque no:</p>

      <FaTiktok size={50} />
      <FaInstagram size={50} />
      <FaRedditAlien size={50} />

    </div>
  )
}