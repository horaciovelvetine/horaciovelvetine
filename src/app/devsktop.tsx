import { useSiteSettings } from '../hooks/site/use-site-settings';
import { MobileLayout } from './layouts/mobile-layout';
import { DevsktopLayout } from './layouts/devsktop-layout';
import { useWindowManager } from '../hooks/site';

export const Devsktop = () => {
  const siteSettings = useSiteSettings();
  const windowManager = useWindowManager(siteSettings);

  return (
    <>
      {siteSettings.useMobileCompatability ?
        <MobileLayout siteSettings={siteSettings} windowManager={windowManager} />
        : <DevsktopLayout siteSettings={siteSettings} windowManager={windowManager} />}
    </>
  );
};
