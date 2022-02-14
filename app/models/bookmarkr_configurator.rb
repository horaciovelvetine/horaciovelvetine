class BookmarkrConfigurator < ApplicationRecord
  # self.abstract_class = true 

  ##* Build Process for sending JSON object to the frontend with stateful config data stored in the backend to remember preferences
  def self.build_cache(admin)
    if admin.state.nil? 
      cache = {
        bookmarks: [Context.where(name: "bookmarked").first.links],
        settings: State.default_settings[:settings],
      }
    elsif
      cache = {
        bookmarks: [Context.where(name: "bookmarked").first.links],
        settings: "~Needs to access admin's state!!~",
      }
    end
    cache
  end  
end


__END__
## sort of a potential data structure to shoot for! 

cache = {
  bookmarks: {

  },
  contexts: {

  }, 
  navbarLinks: {

  },
  settings: {

  }
}
