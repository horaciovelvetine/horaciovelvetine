class State < ApplicationRecord
  belongs_to :admin

  @@nav_links = [{ name: "+Link", href: "${baseUrl}/addlink" },{ name: "Settings", href: "${baseUrl}/settings" },]
  @@contexts = [{ name: 'Default', icon: "HomeIcon", order: 1 },{ name: 'Hired', icon: "BriefcaseIcon", order: 2 },{ name: 'Ktchn', icon: "FireIcon", order: 3 },{ name: 'ToDos', icon:  "ClipboardCheckIcon", order: 4 },]

  def self.default_settings
    default = { 
      config: 
        stateful: {
        mobileMenuOpen: false,
        curContextSelection: "default"
        },
        static: {
          contexts: @@contexts,
          navbarLinks: @@nav_links,
        }
      }
    
  end

end


__END__ 

{ config: 
  stateful: {
    mobileMenuOpen: false,
    curContextSelection: "default"
  },
  static: {
    contexts: [objData],
    navbarLinks: [moreobjData],
  }
}


{
      configInfo: {
        contexts: [
          { name: 'Default', icon: "HomeIcon", order: 1 },
          { name: 'Hired', icon: "BriefcaseIcon", order: 2 },
          { name: 'Ktchn', icon: "FireIcon", order: 3 },
          { name: 'ToDos', icon:  "ClipboardCheckIcon", order: 4 },
        ],
        navbarLinks: [
          { name: "+Link", href: "${baseUrl}/addlink" },
          { name: "Settings", href: "${baseUrl}/settings" },
        ]
      },
      mobileMenuOpen: false
    }