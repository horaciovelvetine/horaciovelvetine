class BookmarkrController < ActionController::Base
    
    ##* Only called on first time page load, includes app config & cache bookmarks
    def index      
      admin = Admin.all.first
      cache = BookmarkrConfigurator.build_cache(admin)
      ##! Starting Here! cache prelim cach object is working, next serialize and get to the fronts end
      binding.pry
      render json: BookmarkrConfigSerializer.new(cache).serializable_hash.to_json
    end

    def search 
      binding.pry
    end

end

