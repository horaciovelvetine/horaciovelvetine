class State < ApplicationRecord
  belongs_to :admin

  def self.defaults
    { config: {
      stateful: {
        mobileMenuOpen: false,
        curContextSelection: "default"
      },
      static: {
        contexts: [{ name: 'Default', icon: "HomeIcon", order: 1 },{ name: 'Hired', icon: "BriefcaseIcon", order: 2 },{ name: 'Ktchn', icon: "FireIcon", order: 3 },{ name: 'ToDos', icon:  "ClipboardCheckIcon", order: 4 },],
        navbarLinks: [{ name: "+Link", href: "${baseUrl}/addlink" },{ name: "Settings", href: "${baseUrl}/settings" },],
      }}
    }
  end

end