class BookmarkrController < ActionController::Base
    skip_before_action :verify_authenticity_token
    ##* Only called on first time page load, includes app config & cache bookmarks
    def index      
      admin = Admin.all.first
      configObject = BookmarkrConfigurator.build_config_object(admin)
      
      render json: BookmarkrConfigSerializer.new(configObject).serializable_hash.to_json
    end

    def search 
      binding.pry
    end

    private

    def bookmarkr_params
      params.require(:bookmarkr).permit(:query)
    end

end

