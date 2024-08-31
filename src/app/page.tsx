import HomeServer from "./Home/page";
import scheduleEmail from "./server/enviar-curriculo";


export default function Home() {
  scheduleEmail();

  return (
    <div className="flex flex-col p-20 items-center justify-center">
      <HomeServer />
    </div>
  )
}
