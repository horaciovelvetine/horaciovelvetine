class ApplicationController < ActionController::Base
  # before_action :authorized unless some params???? 

  def home
    #TODO ongoing => use a serializer to speed up the rendering and get all of this working
    # @data = "sample data"
  end



  private

    #TODO Should be a one way valve to tick a binary, for self it should display all my apps/tools/dashboards and for everyone else should redirect them to a sandbox with walls. 
    # def authorized
    #   binding.pry
    # end
  


end
