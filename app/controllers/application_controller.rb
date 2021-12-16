class ApplicationController < ActionController::Base
  before_action :catch_visitors, only: :home

  def home
  binding.pry
    #TODO use a serializer to speed up the rendering and get all of this working
    ## @payload
  end


  def visitor
  binding.pry
    # @payload = {visitors_pass: "true"}
  end


  private 

  def catch_visitors
    if current_admin.nil?
      redirect_to visitor_url
    end
  end

end
