class ResponseObject < ApplicationRecord
  attr_accessor :admin, :tags, :links

    def self.cache
      cache = ResponseObject.create(admin: Admin.all.first, tags: Tag.all, links: Link.all)
    end
end
