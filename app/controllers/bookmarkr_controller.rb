class BookmarkrController < ActionController::Base
    
    def index
      context = Context.all.where(name: "bookmarked")
      # link_groups = LinkGroup.all 
      render json: BookmarkrSerializer.new(context).serializable_hash.to_json
      
    end

    def search 
      binding.pry
    end

end

