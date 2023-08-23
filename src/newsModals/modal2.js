'use client';
import { useState } from 'react';
import { Button, Modal } from 'flowbite-react';
import n2 from '../assets/news2.png';


export default function DismissableModal2() {
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };

  return (
    <>
      <Button onClick={() => props.setOpenModal('dismissible')}>Mehr Lesen</Button>
      <Modal dismissible show={props.openModal === 'dismissible'} onClose={() => props.setOpenModal(undefined)}>
        <Modal.Header>Bewertung der Auswirkungen der betriebsbedingten Bodenerwärmung auf den Stoff-, Wasser- und Wärmehaushalt im Hinblick auf das „Versuchsfeld Umspannwerk Wolmirstedt“ in Sachsen-Anhalt.</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Messtechnische Aufzeichnung der tatsächlichen Felddaten bezüglich der Wärmeeinwirkung und des thermischen Bodenverhaltens (Temperaturfelder, Wassergehaltsänderungen, etc.);
            </p>
            <img src={n2}/>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Einbeziehen des Austrocknungsverhaltens bindiger Böden unter thermischer Belastung, ggf. Schrumpfungsverhalten mit verbundener Reduktion der Wärmeleitfähigkeit; Kalibrierung und Validierung numerischer Berechnungsmodelle für die Kabelbemessung sowie die Umweltbeeinflussung aus thermischen Lasten; Bereitstellung der Daten für zukünftige Umsetzung und Anwendung von numerischen Simulationen in anstehenden Planungen (Messung der Verlustwärme, Temperatur-, Saugspannungs- und Feuchtigkeitsänderung im Feld, Oberflächenrandbedingungen, wie Aufzeichnung der Klimadaten / DWD, etc.); Einfluss des Kabelbetriebes auf die phänologische Entwicklung der Vegetation, speziell unter Berücksichtigung einer thermischen Maximal- und Überlast.
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


