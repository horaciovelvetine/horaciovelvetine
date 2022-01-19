module api
  class BookmarkrController < ApplicationController::Base

  ##* For the initial request, this fetch should return some... stuff. 
  def index
    binding.pry
  end
  
  ##* Should be for implementing specific searches
  def search
    binding.pry
  end
  
  ##* Should take input and persist object to database (link, todo, recipe, job... etc)
  def new
    binding.pry
  end


  end
end
