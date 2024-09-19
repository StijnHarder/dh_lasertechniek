import Image from "next/image";
import GlobalWidth from "./ui/GlobalWidth";

const About = () => {
  return (
    <GlobalWidth>
      <div className="font-extralight">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-primary-dark bg-white border-[1px] border-border_gray p-8 rounded-lg mt-[100px]">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold">Over D&H Lasertechniek</h2>
            <span>
              Dapper & Harder Natuursteen is een familiebedrijf gevestigd in
              Hoorn, gespecialiseerd in het leveren en bewerken van natuursteen.
              Al sinds 1938 staan wij bekend om ons vakmanschap en onze passie
              voor natuursteen. Met meer dan 80 jaar ervaring in het vak, bieden
              wij onze klanten hoogwaardige producten en persoonlijke service.
            </span>
            <h3 className="text-xl font-semibold mt-1">
              De Geschiedenis van Dapper & Harder Natuursteen
            </h3>
            <span>
              Ons verhaal begint in 1938, toen het bedrijf werd opgericht. In
              die tijd was het een kleine werkplaats waar voornamelijk
              grafmonumenten werden gemaakt. Door hard werken en vakmanschap
              groeide het bedrijf langzaam maar zeker. Door de jaren heen
              bouwden ze een goede reputatie op in de regio, door het leveren
              van kwaliteitsproducten en uitstekende service.
              <p>
                In de jaren die volgden, bleef het bedrijf groeien. De vraag
                naar natuursteen nam toe, en we breidden ons assortiment uit met
                producten zoals keukenbladen, vloeren en gevels. Tegenwoordig is
                Dapper & Harder Natuursteen een gevestigde naam in Noord-Holland
                en ver daarbuiten. We hebben een modern machinepark en
                combineren traditioneel vakmanschap met de nieuwste technieken.
              </p>
            </span>
          </div>
          <Image
            className="rounded-md"
            src="/placeholder_background.jpg"
            width={500}
            height={500}
            alt="still to be determined"
          />
        </div>
      </div>
    </GlobalWidth>
  );
};

export default About;
