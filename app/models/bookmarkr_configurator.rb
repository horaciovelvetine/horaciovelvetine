class BookmarkrConfigurator < ApplicationRecord
  # self.abstract_class = true 

  ##* Build Process for sending JSON object to the frontend with stateful config data stored in the backend to remember preferences
  def self.build_config_object(admin)
    tags = Tag.all
    contexts = Context.all
    bookmarks = Context.where(name: 'bookmarked').first.links

    if admin.state.nil? 
      configObject = OpenStruct.new({
        id: SecureRandom.hex(2),
        settings: State.default_settings,
        bookmarks: bookmarks,
        tags: tags,
        contexts: contexts,
      })
    end
    
    return configObject
  end  
end

