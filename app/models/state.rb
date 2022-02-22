class State < ApplicationRecord
  belongs_to :admin

  def self.defaults
    {
      stateful: {
        mobileMenuOpen: false,
        bounceDelayDefault: 515
      },
      static: {
        contextsMenuItems: [
          { name: 'Default', icon: "homeIcon", current: true, order: 1 },
          { name: 'Hired', icon: "briefcaseIcon", current: false, order: 2 },
          { name: 'Ktchn', icon: "fireIcon", current: false, order: 3 },
          { name: 'ToDos', icon:  "clipboardCheckIcon", current: false, order: 4 },],
        navbarLinks: [{ name: "+Link", href: "${baseUrl}/addlink" },{ name: "Settings", href: "${baseUrl}/settings" },],
      }
    }
  end

end