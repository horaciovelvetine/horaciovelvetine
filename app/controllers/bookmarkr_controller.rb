class BookmarkrController < ActionController::Base
    skip_before_action :verify_authenticity_token, only: [:search]
    
    def index      
      admin = Admin.all.first
      configObject = BookmarkrConfigurator.build_config_object(admin)
      render json: BookmarkrConfigSerializer.new(configObject).serializable_hash.to_json
    end

    def search 
      query = params[:payload][:query]
      results = Link.find_bookmarks(query).map{ |result| result }
      render json: BookmarkrResultsSerializer.new(results).serializable_hash.to_json
    end

    private 

    # def bookmarkr_params
    #   params.require(:bookmarkr).permit(:payload)
    # end

end

