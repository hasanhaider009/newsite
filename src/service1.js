import s1 from "./assets/Images/Service1.png";
import p1 from "./assets/Picture1.png";

export default function Service1() {
  return (
    <div className="container mx-auto pt-20 h-fit">
      <h1 className="text-white text-3xl py-6 text-center">
        Hochspannungs-Gleichstrom-Übertragung in geschlossener und offener
        Bauweise
      </h1>
      <img
        src={s1}
        loading="lazy"
        className="md:container mx-auto object-contain md:w-[50vw] w-[85vw]"
        alt="contact"
      />
      <div className=" h-screen text-yellow-50 w-full">
        <ol className=" text-xl list-decimal sm:mx-20">
          <li className="mt-4">Hochspannungs-Gleichstrom-Übertragung</li>
          <span lang="DE" className="text-base">
            Mit dem Inkrafttreten des <b>Erneuerbare-Energien-Gesetzes </b>
            ist das Ziel verbunden, den Anteil der erneuerbaren Energien an der
            Stromversorgung bis zum Jahr 2050 auf mindestens 80 Prozent zu
            steigern. Damit vor allem die Energie aus der Windkraft von Norden
            nach Süden geleitet werden kann, entstehen mit dem <b>
              SuedLink
            </b>{" "}
            und dem <b>SuedOstLink</b> zwei sogenannte
            Hochspannungs-Gleichstrom-Übertragungs-Verbindungen.{" "}
            <b>Netzausbaubeschleunigungsgesetz Übertragungsnetz (NABEG)</b>{" "}
            dient dem beschleunigten Ausbau länderübergreifender und
            grenzüberschreitender Höchstspannungsleitungen. Hierzu regelt es ein
            zweistufiges Planungs- und Zulassungsverfahren: die{" "}
            <b>Bundesfachplanung</b>
            und die anschließende <b>Planfeststellung</b>. Das Ziel ist die
            Schaffung eines effizienten und umweltverträglichen Netzausbaus.
          </span>

          <li className="mt-4">Bedarfsplan des Vorhabenträgers</li>
          <span lang="DE" className="text-base">
            <p class="MsoNormal">
              <b>
                <span lang="DE">Bedarfsplanungen</span>
              </b>
              <span lang="DE">
                im engeren Sinne sind alle administrativen Ermittlungs- und
                Abschätzungsvorgänge, die sektoral ansetzen und nach Maßgabe von
                Zielen auf die Vorbereitung von Entscheidungen über
                Infrastrukturen und andere Einrichtungen der Daseinsvorsorge
                bezogen sind.{" "}
              </span>
            </p>
            <p class="MsoNormal">
              <span lang="DE">
                Die Bundesnetzagentur ist gemäß Netzausbaubeschleunigungsgesetz
                Übertragungsnetz und Planfeststellungszuweisungsverordnung
                (PlfZV) für die Genehmigung der im Bundesbedarfsplangesetz
                (BBPlG) als länder- bzw. grenzüberschreitend gekennzeichneten
                Energieleitungsvorhaben zuständig.
              </span>
            </p>
            <p class="MsoNormal">
              <span lang="DE">
                Wie die Bundesfachplanung startet auch das
                Planfeststellungsverfahren mit einem Antrag des
                Übertragungsnetzbetreibers. Der Antrag enthält Pläne und
                Beschreibungen des Vorhabens sowie Erläuterungen zu den{" "}
                <b>Umweltauswirkungen</b>.
              </span>
            </p>
          </span>

          <img src={p1} />
          <p class="MsoNormal">
            <span lang="DE">
              Abbildung 1: Bautechnische Planungsstufen nach
              Netzausbaubeschleunigungsgesetz Übertragungsnetz (NABEG)
            </span>
          </p>
        </ol>
      </div>
    </div>
  );
}
