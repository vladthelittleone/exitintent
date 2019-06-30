import React, { Component } from 'react';
import { Modal, ModalBackground, ModalContent } from './Modal';

const App = () => {
  // State
  const [setShowExit, showExit] = useState(false);

  // Handlers
  const handleExitClick = () => {
    setShowExit(false);
  };

  const handleExit = param => {
    const e = param || window.event;
    // Get the current viewport width.
    const vpWidth = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0,
    );

    // If the current mouse X position is within 50px of the right edge
    // of the viewport, return.
    if (e.clientX >= vpWidth - 50) return;

    // If the current mouse Y position is not within 50px of the top
    // edge of the viewport, return.
    if (e.clientY >= 50) return;

    // Reliable, works on mouse exiting window and
    // user switching active program
    const from = e.relatedTarget || e.toElement;
    if (!from) {
      setShowExit(true);
    }
  };

  useEffect(() => {
    document.addEventListener('mouseout', handleExit);
  });

  return (
    <Modal showExit={showExit}>
      <ModalBackground onClick={handleExitClick} />
       <ModalContent>
        <h1>Please Don't Leave</h1>
        <p>
          You really should sign up to our mail list before you leave so we
          can send you stuff and get you to spend some $ with us
        </p>
       </ModalContent>
    </Modal>
  );
};

export default App;
