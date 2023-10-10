"use client";
import { useState } from "react";
import { Button, Modal } from "flowbite-react";
import n2 from "../assets/news2.png";

export default function DismissableModal2() {
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };

  return (
    <>
      <div
        className="rounded-lg border-2 md:col-span-1 col-span-6 text-zinc-800 border-emerald-50 bg-zinc-200 text-slate-800 px-2 py-2 max-h-14 self-center hover:bg-red-600 text-xs hover:text-zinc-200 ease-in duration-200 drop-shadow-md cursor-pointer"
        onClick={() => props.setOpenModal("dismissible")}
      >
        Mehr Lesen
      </div>
      <Modal
        dismissible
        show={props.openModal === "dismissible"}
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header>
          Analyse von Umweltauswirkungen infolge eingeerdeter Hoch- und
          Höchstspannungskabel unter natürlichen Bedingungen
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <img src={n2} />
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Die Geoanalysis-Engineering GmbH hat sich auch in diesem Jahr auf
              der Jahrestagung der Deutschen Bodenkundlichen Gesellschaft vom 2.
              bis 8.9.2023 in Halle (Saale) präsentiert. Unter dem Motto "Böden
              - divers & multifunktional" hat die GAE ein Poster zum Thema
              "Analyse von Umweltauswirkungen infolge eingeerdeter Hoch- und
              Höchstspannungskabel unter natürlichen Bedingungen" vorgestellt
              und die Leistugnsfähigkeit des "GAE-Modells" im Rahmen der
              thermischen Optimierung von HDÜ- und HGÜ-Erdkabelvorhaben
              aufgezeigt.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div
            className="rounded-lg border-2 md:col-span-1 col-span-6 text-zinc-800 border-emerald-50 bg-zinc-200 text-slate-800 px-2 py-2 max-h-14 self-center hover:bg-red-600 hover:text-zinc-200 ease-in duration-200 drop-shadow-md cursor-pointer"
            onClick={() => props.setOpenModal(undefined)}
          >
            Schließen
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}
