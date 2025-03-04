import { useEffect, useState } from "react";

const PWAPrompt = () => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    try {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`User response to install prompt: ${outcome}`);
      
      if (outcome === 'accepted') {
        setShowPrompt(false);
      }
    } catch (err) {
      console.error('Error during installation:', err);
    } finally {
      setDeferredPrompt(null);
    }
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex justify-between items-center z-50">
      <p className="text-sm dark:text-white">Install this app for a better experience</p>
      <div className="flex gap-2">
        <button
          onClick={() => setShowPrompt(false)}
          className="px-3 py-1 text-sm text-gray-600 dark:text-gray-300"
        >
          Not now
        </button>
        <button
          onClick={handleInstallClick}
          className="px-3 py-1 text-sm bg-pm-600 text-white rounded-md"
        >
          Install
        </button>
      </div>
    </div>
  );
};

export default PWAPrompt;