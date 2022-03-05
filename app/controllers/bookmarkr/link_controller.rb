class BookmarkrController < ActionController::Base

  def create
    @link = Link.new(item_params)
    if @link.save
      render json: {notice: "Item created successfully"}
    else
      render json: {notice: "Try again cowboy"}
  end

  def update
    if @link.update(link_params)
      render json: {notice: "Link was updated successfully"}
    else
      render json: {notice: "Unprocessable Update Entity", status: :unprocessable_entity, errors: @link.errors }
    end
  end

  def destroy
    if @link.destroy
      render json: {notice: "Link deleted"}
    else
      render json: {notice: "Unprocessable Delete", status: :unprocessable_entity, errors: @link.errors }
    end

  end

end