class ApplicationController < ActionController::Base
  # before_action :catch_visitors, only: :home

  def home
    @payload = ["testingdetails", "test"] 
  end


  def visitor
    binding.pry
  end


  private 

  def catch_visitors
    if current_admin.nil?
      redirect_to visitor_url
    end
  end

end
