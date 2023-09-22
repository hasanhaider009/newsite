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
        <Modal.Header>Analyse von Umweltauswirkungen infolge eingeerdeter Hoch-
und Höchstspannungskabel unter natürlichen Bedingungen</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            
            <img src={n2}/>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Die Geoanalysis-Engineering GmbH hat sich auch in diesem Jahr auf der Jahrestagung der Deutschen Bodenkundlichen Gesellschaft vom 2. bis 8.9.2023 in Halle (Saale) präsentiert. 

Unter dem Motto "Böden - divers & multifunktional" hat die GAE ein Poster zum Thema "Analyse von Umweltauswirkungen infolge eingeerdeter Hoch- und Höchstspannungskabel unter natürlichen Bedingungen" vorgestellt und die Leistugnsfähigkeit des "GAE-Modells" im Rahmen der thermischen Optimierung von HDÜ- und HGÜ-Erdkabelvorhaben aufgezeigt. 
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


