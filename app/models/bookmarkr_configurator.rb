class BookmarkrConfigurator < ApplicationRecord
  # self.abstract_class = true 

  ##* Build Process for sending JSON object to the frontend with stateful config data stored in the backend to remember preferences
  def self.build_config_object(admin)
    bookmarks = Context.where(name: 'bookmarked').first.links

    if admin.state.nil? 
      return configObject = OpenStruct.new({
        id: SecureRandom.hex(2),
        settings: State.defaults,
        bookmarks: bookmarks,
        tags: Tag.all,
        contexts: Context.all,
      })
    end
    "error: state already exists"
  end  
end

