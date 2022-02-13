class BookmarkrConfigurator < ApplicationRecord
  # self.abstract_class = true 

  ##* Build Process for sending JSON object to the frontend with stateful config data stored in the backend to remember preferences
  def self.build_cache 
    context = Context.all.where(name: "bookmarked")
    binding.pry
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
  additionalState: {

  }
}
