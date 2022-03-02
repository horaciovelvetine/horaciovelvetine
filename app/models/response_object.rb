class ResponseObject < ApplicationRecord
  attr_accessor :admin, :tags, :links

  def self.cache
    cache = ResponseObject.new(admin: Admin.all.first, tags: Tag.all, links: Link.all)
  end

  def self.searchResults(query)
  
    results = Link.find_bookmarks(query)
    response = ResponseObject.new(links: results)
  end
end
