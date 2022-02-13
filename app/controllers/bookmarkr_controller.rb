class BookmarkrController < ActionController::Base
    
    ##* Only called on first time page load, includes app config & cache bookmarks
    def index      
      cache = BookmarkrConfigurator.build_cache
      binding.pry
      render json: BookmarkrConfigSerializer.new(cache).serializable_hash.to_json
    end


    def search 
      binding.pry
    end

end

