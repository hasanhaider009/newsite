'use client';
import { useState } from 'react';
import { Button, Modal } from 'flowbite-react';
import n1 from '../assets/news1.png';


export default function DismissableModal() {
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };

  return (
    <>
      <Button onClick={() => props.setOpenModal('dismissible')}>Mehr Lesen</Button>
      <Modal dismissible show={props.openModal === 'dismissible'} onClose={() => props.setOpenModal(undefined)}>
        <Modal.Header>Horizontale Erdwärmetauscher zum Heizen und Kühlen – numerische Modellierung und Optimierung</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
          <img src={n1}/>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Posterpräsentation von GAE zu den entwickelten und optimierten numerischen Modellen, zur Berechnung der Langzeitleistung von Erdwärmepumpensystemen (GSHP) und deren Integration mit Luftwärmepumpen und Solarthermiekollektoren. Wir verwenden ein vollständig gekoppeltes dreidimensionales Modell, um den Leistungskoeffizienten (COP) Wir verwenden ein vollständig gekoppeltes dreidimensionales Modell, um den Leistungskoeffizienten (COP) horizontaler oder vertikaler Wärmetauscher mit variabler Anordnung in einem Heiz- oder Kühlszenario zu simulieren. Das Modell untersucht die Wirkung innovativer Techniken zum Verfüllen von Gräben und Arbeitsflüssigkeiten in Rohren zur Verbesserung der Systemleistung. Somit wird das Zusammenspiel verschiedener Arten installierter GSHP-Systeme und deren gegenseitige Beeinflussung in Bezug auf Leistung und langfristige Auswirkungen auf die Umwelt ist mit modernster Technologie gut simulierbar.
            </p>
            
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => props.setOpenModal(undefined)}>Schließen</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}


