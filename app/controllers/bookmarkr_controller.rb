class BookmarkrController < ActionController::Base
    
    def index
      bookmarks = Context.all.where(name: "bookmarked").first.links
      link_groups = LinkGroup.all 
      render json: 
    end

    def search 
      binding.pry
    end

end

