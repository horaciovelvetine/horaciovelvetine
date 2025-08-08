import { createFileRoute } from "@tanstack/react-router";
import { MainLandingWindow } from "../features";

// root/index.tsx
export const Route = createFileRoute('/')({
  component: MobileHomePage
})

function MobileHomePage() {
  return (
    <>
      <div className="bg-stone-900/70 m-2 py-2 rounded border border-stone-300/50">
        <MainLandingWindow />
      </div>
      <div className="bg-stone-900/70  m-2 py-2 rounded border border-stone-300/50">
        
      </div>
      
    </>

  )
}