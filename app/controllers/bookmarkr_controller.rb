class BookmarkrController < ActionController::Base
    
    ##* Only called on first time page load, includes app config & cache bookmarks
    def index      
      admin = Admin.all.first
      configObject = BookmarkrConfigurator.build_config_object(admin)
      
      render json: BookmarkrConfigSerializer.new(cache).serializable_hash.to_json
    end

    def search 
      binding.pry
    end

end

