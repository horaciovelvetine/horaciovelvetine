class BookmarkrConfigurator < ApplicationRecord
  self.abstract_class = true 
  
  def build_cache 
    context = Context.all.where(name: "bookmarked")
    binding.pry
  end  
end
