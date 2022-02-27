class BookmarkrCacheSerializer < ActionController::Base
  include JSONAPI::Serializer
  set_type :cache_object
  set_id :id
  attributes :tags, :links

end
