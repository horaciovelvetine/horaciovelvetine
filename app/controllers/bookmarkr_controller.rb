class BookmarkrController < ActionController::Base
    skip_before_action :verify_authenticity_token, only: [:search]
    
    def index
      payload = ResponseObject.cache
      render json: BookmarkrCacheSerializer.new(payload).serializable_hash.to_json
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

