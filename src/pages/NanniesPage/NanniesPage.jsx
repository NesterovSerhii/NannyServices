import React, {useState} from 'react';
import css from './NanniesPage.module.css';
import Header from 'components/Header';
import Filter from 'components/Filter/Filter';
import NanniesList from 'components/NanniesList/NanniesList';
import MeetingModal from 'components/MeetingModal/MeetingModal';


const NanniesPage = () => {
  const headerBackgroundColor = "#103931";
  
  const initialLoad = 3;
  
  const [isMeetingModalOpen, setMeetingModalOpen] = useState(false);
  
  const [selectedNanny, setSelectedNanny] = useState(null);
  
  const openMeetingModal = (nanny) => {
    setSelectedNanny(nanny);
    setMeetingModalOpen(true);
  };
  
  const closeMeetingModal = () => setMeetingModalOpen(false);

  return (
    <div className={css.container}>
      <Header backgroundColor={headerBackgroundColor} />
      <section className={css.section}>
        <Filter/>
        <NanniesList initialLoad={initialLoad} openMeetingModal={openMeetingModal} />
      </section>
      {isMeetingModalOpen && (
        <MeetingModal onClose={closeMeetingModal} nanny={selectedNanny} />
      )}
    </div>

  );
}

export default NanniesPage