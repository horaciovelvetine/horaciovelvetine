class BookmarkrController < ActionController::Base
    skip_before_action :verify_authenticity_token, only: [:search]
    
    def index      
      admin = Admin.all.first
      configObject = BookmarkrConfigurator.build_config_object(admin)
      render json: BookmarkrConfigSerializer.new(configObject).serializable_hash.to_json
    end

    def search 
      query = params[:payload][:query]
      ## => should take that query and use it to search against links, and tags
      ## => take the results of possibly two searches and return an array full of ordered ID's
      ## => respond json, and filter displayed bookmarks and tags based on array of ID's 

      ## => Simpler for now just return a list of matched name/href searched links, then only return bookmark context items, focus on additional response items after successfully rendering a link result
      binding.pry
    end

    private 

    # def bookmarkr_params
    #   params.require(:bookmarkr).permit(:payload)
    # end

end

