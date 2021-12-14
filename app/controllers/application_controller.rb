class ApplicationController < ActionController::Base

  def home
    # ongoing => use a serializer to speed up the rendering and get all of this working
    @data = "sample data"
  end


end
