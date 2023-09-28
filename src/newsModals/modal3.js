'use client';
import { useState } from 'react';
import { Button, Modal } from 'flowbite-react';
import n3 from '../assets/news3.png';

export default function DismissableModal3() {
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };

  return (
    <>
      <div className="rounded-lg border-2 md:col-span-1 col-span-6 text-zinc-800 border-emerald-50 bg-zinc-200 text-slate-800 px-2 py-1 sm:py-2 max-h-14 self-center hover:bg-red-600 text-xs hover:text-zinc-200 ease-in duration-200 drop-shadow-md cursor-pointer" onClick={() => props.setOpenModal('dismissible')}>Mehr Lesen</div>
      <Modal dismissible show={props.openModal === 'dismissible'} onClose={() => props.setOpenModal(undefined)}>
        <Modal.Header>Standort-Stadt-Interaktionsmodellierung für Erdbebenszenarien durch fortschrittliche Hybrid-BEM-FEM</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
          <img src={n3}/>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Erdbebensichere Gebäude sind für den Aufbau erdbebensicherer Städte in erdbebengefährdeten Regionen weltweit von entscheidender Bedeutung. Die traditionelle Praxis der seismischen Analyse von Gebäuden betrachtet ein einzelnes Gebäude als separate Einheit. Das numerische Modell der Gebäude besteht häufig aus einer festen Begrenzung am Fundament. In einem solchen Strukturmodell wird der Effekt des dynamischen Verhaltens aufgrund der Boden-Struktur-Interaktion (SSI) und der Interaktion aufgrund mehrerer Gebäude häufig vernachlässigt. Um einen solchen Effekt zu berücksichtigen, wird ein hybrides Boundary/Finite-Elemente-Methode-Modell (BEM-FEM) entwickelt, um den Effekt der Site-City-Interaktion (SCI) zwischen mehreren Gebäuden und SSI während eines Erdbebens zu simulieren. Das 3D-Modell berücksichtigt die Bodenbewegung aufgrund einer entfernten seismischen Quelle, die Wirkung des Mediums, durch das sie sich ausbreitet, sowie die Verstärkung oder Verringerung der Bodenbewegung aufgrund mehrerer Gebäudeinteraktionen und SSI. Die seismische Anregung besteht aus dem analytischen Ausdruck für die zeitharmonische Freifeldbewegung. Die Wellenausbreitung im Fernfeld wird mithilfe des analytischen BEM-Ausdrucks für Freifeldbewegungen modelliert. Der geologische Nahfeldbereich wird in FEM modelliert, wobei mehrstöckige Gebäude als Blöcke modelliert werden. Für jedes Gebäude werden der Boden und die Verschiebung des obersten Stockwerks eingezeichnet, und die Wechselwirkung zwischen Standort und Stadt wird anhand von Farbkonturen dargestellt. Das Modell ist skalierbar und könnte problemlos zusätzliche Boden- und Strukturelemente integrieren.
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


