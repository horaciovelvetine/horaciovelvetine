class ApplicationController < ActionController::Base
  before_action :catch_visitors

  def home
    #TODO use a serializer to speed up the rendering and get all of this working
    # @data = "sample data"
  end

  private 

  def catch_visitors
    binding.pry
    
  end

end
