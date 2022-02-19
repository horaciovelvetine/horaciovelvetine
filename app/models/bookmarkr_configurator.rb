class BookmarkrConfigurator < ApplicationRecord
  # self.abstract_class = true 

  ##* Build Process for sending JSON object to the frontend with stateful config data stored in the backend to remember preferences
  def self.build_cache(admin)
    tags = Tags.all
    bookmarks = Context.where(name: 'bookmarked').first.links

    if admin.state.nil? 
      configObject = OpenStruct.new({
        id: SecureRandom.hex(2),
        bookmarks: bookmarks,
        tags: tags,
        settings: State.default_settings[:settings],
      })
    end
    
    return configObject
  end  
end

