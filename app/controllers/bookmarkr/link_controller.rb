module Bookmarkr
  class LinkController < ActionController::Base
  skip_before_action :verify_authenticity_token
  
    def create
      binding.pry
      @link = Link.new(link_params)
      if @link.save
        render json: {notice: "Item created successfully"}
      else
        render json: {notice: "Try again cowboy"}
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
      binding.pry
      if @link.destroy
        render json: {notice: "Link deleted"}
      else
        render json: {notice: "Unprocessable Delete", status: :unprocessable_entity, errors: @link.errors }
      end

    end

    private 
    
    def link_params
      params.require(:link).permit(:name, :href, :addTags, :isPinned, :tags)
    end
  end
end