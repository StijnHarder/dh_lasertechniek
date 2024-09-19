import { GiLaserBurst } from "react-icons/gi";
import GlobalWidth from "./ui/GlobalWidth";
import Container from "./ui/Container";

const ServicesBlock = () => {
  return (
    <GlobalWidth>
      <Container
        id="services"
        className="flex-col text-primary-dark mt-[500px] md:mt-[100px]"
      >
        <div className="flex flex-col gap-1">
          <h2 className="font-bold text-2xl">Welke services leveren wij?</h2>
          <p>
            Bekijk en kies welke vervaardiging van laseren van natuursteen jij
            nodig hebt! <span className="font-bold">Vragen?</span> Neem gerust
            contact met ons op.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 mt-10 w-full">
          <Container className="flex-1 flex-col items-start gap-2">
            <div className="flex flex-col gap-3">
              <div className="rounded-full p-2 bg-icon_purple mb-5 w-fit">
                <GiLaserBurst size={25} color="#FFFFFF" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-xl">Natuursteen laseren</h3>
                <p>
                  Laseren van natuursteen biedt precisie, unieke gravures en
                  duurzame afwerkingen voor diverse toepassingen, van monumenten
                  tot maatwerk interieurdesign.
                </p>
              </div>
            </div>
            <button className="p-2 border-[1px] border-border_gray bg-border_gray hover:bg-white rounded-sm mt-5">
              Zie projecten
            </button>
          </Container>
          <Container className="flex-1 flex-col items-start justify-between gap-2">
            <div className="flex flex-col gap-3">
              <div className="rounded-full p-2 bg-icon_light_blue mb-5 w-fit">
                <GiLaserBurst size={25} color="#FFFFFF" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-xl">Hout laseren</h3>
                <p>
                  Laseren van hout creëert gedetailleerde gravures, op maat
                  gemaakte designs en scherpe snijlijnen voor uiteenlopende
                  projecten.
                </p>
              </div>
            </div>
            <button className="p-2 border-[1px] border-border_gray bg-border_gray hover:bg-white rounded-sm mt-5">
              Zie projecten
            </button>
          </Container>
          <Container className="flex-1 flex-col items-start justify-between gap-2">
            <div className="flex flex-col gap-3">
              <div className="rounded-full p-2 bg-icon_blue mb-5 w-fit">
                <GiLaserBurst size={25} color="#FFFFFF" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-xl">RVS laseren</h3>
                <p>
                  Laseren van RVS zorgt voor nauwkeurige markeringen, duurzame
                  gravures en hoogwaardige afwerkingen, ideaal voor industriële
                  en decoratieve toepassingen.
                </p>
              </div>
            </div>
            <button className="p-2 border-[1px] border-border_gray bg-border_gray hover:bg-white rounded-sm mt-5">
              Zie projecten
            </button>
          </Container>
        </div>
      </Container>
    </GlobalWidth>
  );
};

export default ServicesBlock;
