class State < ApplicationRecord
  belongs_to :admin

  def self.default_settings
    defaults = {
      settings: {
        contexts: [
          { name: 'Home', icon: "HomeIcon", current: true, order: 1 },
          { name: 'Hired', icon: "BriefcaseIcon", current: false, order: 2 },
          { name: 'Ktchn', icon: "FireIcon", current: false, order: 3 },
          { name: 'ToDos', icon:  "ClipboardCheckIcon", current: false, order: 4 },
        ],
        navbarLinks: [
          { name: "+Link", href: "${baseUrl}/addlink" },
          { name: "Settings", href: "${baseUrl}/settings" },
        ]
      }
    }
  end

end
