import { useSiteSettings } from '../hooks/site/use-site-settings';
import { MobileDevsktopLayout } from './layouts/mobile-devsktop-layout';
import { MainDevsktopLayout } from './layouts/main-devsktop-layout';

export const Devsktop = () => {
  const siteSettings = useSiteSettings();

  return (
    <main className='h-screen w-screen bg-cover saturate-[1.5] overflow-hidden box-border text-white brightness-90'>
      {siteSettings.useMobileCompatability ?
        <MobileDevsktopLayout />
        : <MainDevsktopLayout {...siteSettings} />}
    </main>
  );
};
