class ApplicationController < ActionController::Base
  before_action :catch_visitors, only: :home

  def home
    #TODO use a serializer to speed up the rendering and get all of this working
    binding.pry
    # @data = "sample data"
  end


  def about
    binding.pry
    #TODO should still send to the homepage front page but with no login data, to tell the React front end to register / redirect to the sandboxed front end
  end


  private 

  def catch_visitors
    if current_admin.nil? 
      redirect_to about_url
    end
  end

end
