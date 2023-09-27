'use client';
import { useState } from 'react';
import { Button, Modal } from 'flowbite-react';
import n4 from '../assets/news4.jpg';

export default function DismissableModal4() {
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };

  return (
    <>
      <div className="rounded-lg border-2 md:col-span-1 col-span-6 text-xs text-zinc-800 border-emerald-50 bg-zinc-200 text-slate-800 px-2 py-2 max-h-14 self-center hover:bg-red-600 hover:text-zinc-200 ease-in duration-200 drop-shadow-md cursor-pointer" onClick={() => props.setOpenModal('dismissible')}>Mehr Lesen</div>
      <Modal dismissible show={props.openModal === 'dismissible'} onClose={() => props.setOpenModal(undefined)}>
        <Modal.Header>Optimierung des Systems für erneuerbare Energien durch eine geeignete Auslegung und ein vollständig gekoppeltes Modell</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
          <img src={n4}/>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            GAE präsentierte ein Poster über die Entwicklung und Optimierung eines numerischen Modells zur Berechnung der langfristigen Leistung von Erdwärmepumpensystemen (GSHP). Ein vollständig gekoppeltes 3D-Modell, das alle Massen- und Wärmeübertragungsprozesse umfasst, wurde verwendet, um die Leistungszahl (COP) eines horizontalen oder vertikalen Wärmetauschers im Heiz- oder Kühlfall zu simulieren. Das Modell prognostiziert die Auswirkungen des langfristigen Klimawandels und der Form des Wärmetauschers auf den COP und liefert die optimale Lösung für die Wärmepumpenleistung und den Wärmetauscher, um den Wärme-/Kältebedarf zu decken und ein erneuerbares, nachhaltiges und wirtschaftlich optimales System zu gewährleisten. Das Modell kann auch mit Solaranlagen, Windkraft und Luftwärmepumpen kombiniert werden, um den Energiebedarf der Endnutzer zu decken und langfristige Betriebskosten zu sparen.

Im Rahmen der Energiewende in Deutschland ist die GAE somit in der Lage, mit Hilfe modernster Technologie die Wechselwirkungen zwischen den verschiedenen Typen installierter AKW-Systeme zu simulieren, zu bewerten und zu optimieren, ebenso wie deren Wechselwirkungen in Bezug auf Leistung und langfristige Umweltauswirkungen (Gebäudebestand, regionale Böden, Grundwasser und Ökologie).
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
        <div className="rounded-lg border-2 md:col-span-1 col-span-6 text-zinc-800 border-emerald-50 bg-zinc-200 text-slate-800 px-2 py-2 max-h-14 self-center hover:bg-red-600 hover:text-zinc-200 ease-in duration-200 drop-shadow-md cursor-pointer" onClick={() => props.setOpenModal(undefined)}>Schließen</div>
        </Modal.Footer>
      </Modal>
    </>
  )
}


