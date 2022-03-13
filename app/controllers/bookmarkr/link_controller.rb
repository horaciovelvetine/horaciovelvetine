module Bookmarkr
  class LinkController < ActionController::Base
  skip_before_action :verify_authenticity_token
  
    def create
    
      link = Link.new(name: params[:name], href: params[:href], pinned: params[:pinned])
      params[:tags].each{ |tag| link.tags << Tag.find(tag[:id]) }

      if link.save
        render json: LinkSerializer.new(link).serializable_hash.to_json
      else
        render json: {notice: "Try again cowboy, that link ain't gonna work round these parts"}
      end

    end

    def update
      
      binding.pry
      
      if @link.update(link_params)
        render json: {notice: "Link was updated successfully"}
      else
        render json: {notice: "Unprocessable Update Entity", status: :unprocessable_entity, errors: @link.errors }
      end
    end

    def destroy

      link = Link.find(params[:id])

      if link.destroy
        render json: {notice: "Link deleted"}
      else
        render json: {notice: "Unprocessable Delete", status: :unprocessable_entity, errors: @link.errors }
      end

    end

    private 
    
    # def link_params
    #   params.require(:link).permit(:name, :href, :addTags, :isPinned, :tags)
    # end
  end
end