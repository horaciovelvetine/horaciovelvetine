class BookmarkrController < ActionController::Base
    
    def index
      # context = Context.all.where(name: "bookmarked")
      # render json: BookmarkrConfigSerializer.new(context).serializable_hash.to_json
      
    end

    def search 
      binding.pry
    end

end

