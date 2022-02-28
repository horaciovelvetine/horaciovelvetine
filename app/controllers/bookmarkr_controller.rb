class BookmarkrController < ActionController::Base
    skip_before_action :verify_authenticity_token, only: [:search]
    
    def index
      payload = ResponseObject.cache
      render json: BookmarkrCacheSerializer.new(payload).serializable_hash.to_json
    end

    def search 
      query = params[:query]
      results = ResponseObject.searchResults(query)
      binding.pry
      # if results.empty?
      #   render json: {resultsIds: "noneMatching"}
      # end
      render json: BookmarkrResultsSerializer.new(results).serializable_hash.to_json
    end

    private 

    # def bookmarkr_params
    #   params.require(:bookmarkr).permit(:payload)
    # end

end

